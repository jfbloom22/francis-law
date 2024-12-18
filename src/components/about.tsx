import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#001F54] text-center mb-16">
          About Meredith Macon Francis
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/meredith-francis-headshot.jpg"
              alt="Professional portrait"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Meredith Macon Francis is an accomplished attorney specializing in
              technology transactions and outsourcing. With a robust background
              in negotiating complex contracts across industries including
              telecommunications, retail, hospitality, and pharmaceuticals, she
              has established herself as a trusted advisor for businesses
              seeking innovative and pragmatic legal counsel.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When she's not helping clients achieve their legal goals, Meredith
              enjoys hiking, swimming and paddle boarding in Lake Geneva with
              her husband, two children and dachshund.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-xl font-serif text-[#001F54] mb-4">
                  Education
                </h3>
                <p className="text-gray-600">
                  Magna Cum Laude, University of Georgia School of Law
                </p>
                <p className="text-gray-600">
                  B.A. History, Samford University
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Award className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-xl font-serif text-[#001F54] mb-4">
                  Bar Admissions
                </h3>
                <p className="text-gray-600">Licensed to practice in:</p>
                <p className="text-gray-600">Georgia and Florida</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                <h3 className="text-xl font-serif text-[#001F54] mb-4">
                  Experience
                </h3>
                <p className="text-gray-600">Over 10 years of experience in</p>
                <p className="text-gray-600">
                  technology transactions and corporate law
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
