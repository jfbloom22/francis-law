import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function AboutCard({ icon: Icon, title, children }: AboutCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <Icon className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
          <h3 className="text-xl font-serif text-[#001F54] mb-4">{title}</h3>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}