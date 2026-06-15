'use client';

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function InternationalSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-accent" />
              <span className="text-lg font-semibold text-accent">GLOBAL EXPANSION</span>
            </div>
            <h2 className="text-5xl font-bold text-white text-balance leading-tight">
              Launch a UK Company From Anywhere in the World
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              The United Kingdom remains one of the world&apos;s most attractive jurisdictions for entrepreneurs launching global businesses.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              UK Business Gateway helps founders worldwide establish UK companies quickly and securely.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-semibold mt-6"
            >
              Start Your UK Company
            </Button>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-accent/20 rounded-2xl overflow-hidden">
              <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center">
                  <Globe className="w-32 h-32 text-white/30 mb-4 mx-auto" />
                  <p className="text-white/70 font-medium">Global Business Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
