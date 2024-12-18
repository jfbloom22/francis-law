import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Server, Building2, Network } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#001F54] text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Server className="w-12 h-12 text-[#DAA520] mb-4" />
              <CardTitle className="font-serif text-[#001F54]">
                Technology Transactions
              </CardTitle>
              <CardDescription>
                Comprehensive IT agreement solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• SaaS and Software Licensing</li>
                <li>• ERP Implementation</li>
                <li>• Cloud Services Contracts</li>
                <li>• IT Infrastructure Agreements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="w-12 h-12 text-[#DAA520] mb-4" />
              <CardTitle className="font-serif text-[#001F54]">
                Corporate Governance
              </CardTitle>
              <CardDescription>
                Strategic business solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Entity Formation</li>
                <li>• Corporate Agreements</li>
                <li>• Governance Policies</li>
                <li>• Risk Management</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Network className="w-12 h-12 text-[#DAA520] mb-4" />
              <CardTitle className="font-serif text-[#001F54]">
                Outsourcing Agreements
              </CardTitle>
              <CardDescription>
                End-to-end outsourcing solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• IT Infrastructure Support</li>
                <li>• Business Process Outsourcing</li>
                <li>• Managed Services</li>
                <li>• Help Desk Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}