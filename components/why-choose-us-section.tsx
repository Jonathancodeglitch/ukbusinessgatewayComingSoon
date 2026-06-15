'use client';

import { Briefcase, Globe, Zap } from 'lucide-react';

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Briefcase,
      title: 'Solicitor-Led Service',
      description: 'Your company formation is handled with legal oversight to ensure proper governance and compliance.'
    },
    {
      icon: Globe,
      title: 'Global Founder Friendly',
      description: 'Entrepreneurs worldwide can easily launch UK companies with our streamlined international process.'
    },
    {
      icon: Zap,
      title: 'Startup Support',
      description: 'Beyond formation, we provide legal and compliance tools to help businesses grow and scale.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-primary mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold text-foreground text-balance">
            UK Business Gateway Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 hover:border-primary/30 transition-colors"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
