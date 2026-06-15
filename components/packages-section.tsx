'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, Star } from 'lucide-react';

export function PackagesSection() {
  const packages = [
    {
      name: 'Basic Formation',
      price: '179',
      popular: false,
      features: [
        'Company registration',
        'Digital incorporation documents',
        'Standard form memorandum and articles'
      ],
      cta: 'Start Now'
    },
    {
      name: 'Startup Formation',
      price: '249',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Company formation (all of Basic) plus',
        'Share certificates',
        'Statutory registers',
        'Compliance guide'
      ],
      cta: 'Start Now'
    },
    {
      name: 'Solicitor Launch Pack',
      price: '599',
      popular: false,
      features: [
        'Company formation',
        'Shareholders agreement',
        'Founder IP assignment',
        'NDA template'
      ],
      cta: 'Launch My Business'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-primary mb-2">FORMATION PACKAGES</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple, transparent pricing. All packages include Companies House registration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'ring-2 ring-primary shadow-xl scale-105 lg:scale-100 lg:md:scale-105 bg-white'
                  : 'bg-background border border-border'
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-primary to-accent px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">£{pkg.price}</span>
                  <span className="text-foreground/60 ml-2">one-time</span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full font-semibold ${
                    pkg.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {pkg.cta}
                </Button>

                {pkg.name === 'Basic Formation' && (
                  <p className="text-center text-sm text-foreground/60 mt-4">
                    Need tailored terms? <a href="#" className="text-primary font-semibold hover:underline">Enquire here</a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
