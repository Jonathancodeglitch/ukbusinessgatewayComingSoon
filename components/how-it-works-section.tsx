'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Complete Questionnaire',
      description: 'Complete our company formation questionnaire'
    },
    {
      number: '2',
      title: 'Upload Documents',
      description: 'Upload identification documents for compliance checks'
    },
    {
      number: '3',
      title: 'Get Registered',
      description: 'Your company is registered and your documents are delivered'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-primary mb-2">SIMPLE PROCESS</p>
          <h2 className="text-4xl font-bold text-foreground text-balance">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-primary/30 to-accent/30"></div>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/60 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Start Your Company
          </Button>
        </div>
      </div>
    </section>
  );
}
