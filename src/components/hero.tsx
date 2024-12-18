import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-[#001F54] to-[#003087]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Welcome to Francis Law, LLC
        </h1>
        <h2 className="text-xl md:text-2xl text-[#DAA520] font-serif mb-8">
          Expertise. Precision. Results.
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          At Francis Law, LLC, we provide tailored legal solutions for businesses
          navigating the complexities of technology transactions, outsourcing
          agreements, and corporate matters.
        </p>
        <Button
          size="lg"
          className="bg-[#DAA520] hover:bg-[#B8860B] text-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
}