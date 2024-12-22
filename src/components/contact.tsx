import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
    };

    try {
      // Create base URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxP_NleeUrf8AJBQ35SXPZrqot66jiAtvExy_o_kqbZN04zDj6OvYMxf7aPUtU-IK1CvA/exec'; // ends with /exec
      const url = new URL(SCRIPT_URL);
      
      // Add form data as URL parameters
      Object.entries(data).forEach(([key, value]) => {
        url.searchParams.append(key, value as string);
      });

      // Create and append script element
      const script = document.createElement('script');
      const callbackName = 'jsonpCallback_' + Date.now();
      
      const responsePromise = new Promise((resolve, reject) => {
        // Define callback
        // @ts-expect-error - we know this is a string
        window[callbackName as any] = (response: unknown) => {
          if (response && typeof response === 'object' && 'result' in response && response.result === 'success') {
            resolve(response);
          } else {
            console.log(response);
            const message = response && typeof response === 'object' && 'message' in response ? response.message as string : 'Submission failed';
            reject(new Error(message));
          }
          // Cleanup
          delete window[callbackName as any];
          document.body.removeChild(script);
        };
        
        // Handle script load error
        script.onerror = () => {
          delete window[callbackName as any];
          document.body.removeChild(script);
          reject(new Error('Failed to send message'));
        };
      });

      // Add callback parameter and create script
      url.searchParams.append('callback', callbackName);
      script.src = url.toString();
      document.body.appendChild(script);

      // Wait for response
      await responsePromise;
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#001F54] text-center mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-[#001F54] mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              We're here to help you navigate the legal complexities of today's
              business landscape. Reach out today to schedule a consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#DAA520]" />
                <span className="text-gray-600">Available by appointment</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#DAA520]" />
                <span className="text-gray-600">Georgia & Florida</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input name="firstName" placeholder="First Name" required />
              </div>
              <div>
                <Input name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <Input name="subject" placeholder="Subject" required />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your message"
                className="min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#001F54] hover:bg-[#002D7A] text-white"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </Button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                {errorMessage || 'Failed to send message. Please try again later.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}