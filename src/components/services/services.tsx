import { Server, Building2, Network } from 'lucide-react';
import { ServiceCard } from './service-card';
import { servicesData } from './services-data';

const icons = [Server, Building2, Network];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#001F54] text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={icons[index]}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}