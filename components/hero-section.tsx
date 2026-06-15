'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/10 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight text-foreground">
                Start Your UK Business in <span className="text-primary">24 Hours</span>
              </h1>
              <p className="text-xl text-foreground/75 text-balance leading-relaxed">
                Register your UK company quickly, securely, and correctly with solicitor-led support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Start Your Company
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-accent/50"
              >
                Check Company Name <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl overflow-hidden">
              <div className="absolute top-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-40"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="w-16 h-16 bg-accent/40 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground">Entrepreneur using laptop<br />with London skyline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
