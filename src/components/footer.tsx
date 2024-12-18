import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Scale className="h-8 w-8" />
            <span className="text-xl font-serif">Francis Law</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80">
              © {new Date().getFullYear()} Francis Law, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}