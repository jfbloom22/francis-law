import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  text: string;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <Icon className="w-6 h-6 text-[#DAA520]" />
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-serif text-[#001F54] mb-6">
        Get in Touch
      </h3>
      <p className="text-gray-600 mb-8">
        We're here to help you navigate the legal complexities of today's
        business landscape. Reach out today to schedule a consultation.
      </p>

      <div className="space-y-6">
        <ContactItem icon={Mail} text="m.francislaw@gmail.com" />
        <ContactItem icon={Phone} text="Available by appointment" />
        <ContactItem icon={MapPin} text="Georgia & Florida" />
      </div>
    </div>
  );
}