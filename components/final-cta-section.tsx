'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6 text-balance leading-tight">
          Ready to Start Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of entrepreneurs who&apos;ve already launched their UK companies with us. Get started today in just 24 hours.
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-8 py-6 h-auto"
        >
          Start Your Company Today <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
