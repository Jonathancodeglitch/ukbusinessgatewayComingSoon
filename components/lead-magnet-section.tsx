'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen } from 'lucide-react';

export function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    // Reset form
    setFormData({ name: '', email: '', country: '' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg border border-border">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-3 text-balance">
              Free Guide: How to Start a UK Company in 24 Hours
            </h2>
            <p className="text-lg text-foreground/60">
              Get expert insights and step-by-step instructions to launch your UK business
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-secondary/50 focus:border-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-secondary/50 focus:border-primary"
              />
            </div>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-secondary/50 bg-white text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select Your Country</option>
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="other">Other</option>
            </select>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 text-lg"
              size="lg"
            >
              Download Free Guide
            </Button>
          </form>

          <p className="text-center text-sm text-foreground/50 mt-6">
            We&apos;ll never share your information. Check our <a href="#" className="text-primary hover:underline">privacy policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
