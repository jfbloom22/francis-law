import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input placeholder="First Name" required />
        </div>
        <div>
          <Input placeholder="Last Name" required />
        </div>
      </div>
      <div>
        <Input type="email" placeholder="Email" required />
      </div>
      <div>
        <Input placeholder="Subject" required />
      </div>
      <div>
        <Textarea
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
  );
}