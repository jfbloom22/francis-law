import { Award, BookOpen, MapPin } from 'lucide-react';
import { AboutCard } from './about-card';
import { AboutContent } from './about-content';

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
              alt="Meredith Francis - Technology and Corporate Law Attorney"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <AboutContent />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AboutCard icon={BookOpen} title="Education">
            <p className="text-gray-600">
              Magna Cum Laude, University of Georgia School of Law
            </p>
            <p className="text-gray-600">B.A. History, Samford University</p>
          </AboutCard>

          <AboutCard icon={Award} title="Bar Admissions">
            <p className="text-gray-600">Licensed to practice in:</p>
            <p className="text-gray-600">Georgia and Florida</p>
          </AboutCard>

          <AboutCard icon={MapPin} title="Experience">
            <p className="text-gray-600">Over 10 years of experience in</p>
            <p className="text-gray-600">
              technology transactions and corporate law
            </p>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
