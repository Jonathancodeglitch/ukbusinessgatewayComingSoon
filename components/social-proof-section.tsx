'use client';

import { Shield, Lock, Building2, CheckCircle } from 'lucide-react';

export function SocialProofSection() {
  const stats = [
    {
      icon: Building2,
      label: 'Companies Registered',
      desc: 'with Companies House'
    },
    {
      icon: Shield,
      label: 'AML-Compliant',
      desc: 'Onboarding Process'
    },
    {
      icon: Lock,
      label: 'Secure Payment',
      desc: 'Processing'
    },
    {
      icon: CheckCircle,
      label: 'Solicitor-Led',
      desc: 'Service'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-primary mb-2">WHY TRUST US</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by entrepreneurs launching businesses across the UK and internationally
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-foreground/60">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
