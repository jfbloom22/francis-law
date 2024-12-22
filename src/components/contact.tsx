import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      const response = await fetch('https://script.google.com/macros/s/AKfycbzBZ0DYLHzmorrTfGym1PgmiXEVp829kdUGH8bxJfdjJ-sugnUMDDvyes2WLM-XTLuvKw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
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
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}