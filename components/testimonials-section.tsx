'use client';

import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Tech Startup Founder',
      content: 'UK Business Gateway made the company formation process seamless and professional. The solicitor-led support gave me peace of mind.',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'International Entrepreneur',
      content: 'As a founder based in Singapore, setting up a UK company was incredibly smooth. The process was faster than expected.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'E-commerce Founder',
      content: 'The compliance guide and statutory registers included with the Startup Formation package were invaluable for our business.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-primary mb-2">CUSTOMER SUCCESS</p>
          <h2 className="text-4xl font-bold text-foreground text-balance">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
