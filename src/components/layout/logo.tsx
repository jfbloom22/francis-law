import { Scale } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Scale className="h-8 w-8 text-[#001F54]" />
      <span className="text-xl font-serif text-[#001F54]">Francis Law</span>
    </div>
  );
}