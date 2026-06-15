'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How long does it take to register a UK company?',
    answer: 'With UK Business Gateway, you can register your UK company in as little as 24 hours. Our streamlined process and solicitor support ensure quick and accurate registration without delays.',
  },
  {
    id: '2',
    question: 'What are the requirements to form a UK Limited Company?',
    answer: 'To form a UK Limited Company, you need at least one director and one shareholder (can be the same person), a registered office address, and a unique company name. We guide you through all requirements and ensure full compliance.',
  },
  {
    id: '3',
    question: 'Can non-residents register a UK company?',
    answer: 'Yes! Non-residents can register a UK company with us. You don\'t need to be a UK resident or citizen. We handle the process entirely and provide support to international entrepreneurs.',
  },
  {
    id: '4',
    question: 'What documents do I need to provide?',
    answer: 'You\'ll need proof of identity, proof of address, director and shareholder details, and company information. Our team will guide you on exact documentation required based on your situation.',
  },
  {
    id: '5',
    question: 'Do you offer post-registration support?',
    answer: 'Yes, we provide comprehensive post-registration support including tax registration, accounting setup, and compliance guidance. Our packages include ongoing support to ensure your company runs smoothly.',
  },
  {
    id: '6',
    question: 'What are your fees and is there a payment plan?',
    answer: 'We offer transparent, competitive pricing with three packages: Startup Formation, Professional Setup, and Complete Package. All prices include solicitor support and post-registration assistance.',
  },
];

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Find answers to common questions about starting your UK company with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-card/50 border-t border-border">
                  <p className="text-foreground/75 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/30 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-foreground/70 mb-4">
            Contact our team of experts for personalised support and guidance.
          </p>
          <a
            href="mailto:support@ukbusinessgateway.com"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
