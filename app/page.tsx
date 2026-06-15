'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, Twitter, Linkedin, Facebook } from 'lucide-react';


export default function ComingSoonPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    isSubmitted: false,
    isLoading: false,
    error: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
      error: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true, error: '' }));

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Validate email
      if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setFormState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: 'Please enter a valid email address' 
        }));
        return;
      }

      if (!formState.name.trim()) {
        setFormState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: 'Please enter your name' 
        }));
        return;
      }

      console.log('[v0] Form submitted:', { name: formState.name, email: formState.email });

      setFormState(prev => ({
        ...prev,
        isSubmitted: true,
        isLoading: false,
        name: '',
        email: '',
      }));

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          isSubmitted: false,
        }));
      }, 5000);
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Something went wrong. Please try again.',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Something Amazing is Coming
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance leading-relaxed">
              We&apos;re building the future of UK company formation. Be the first to know when we launch and get exclusive early-bird benefits.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 mb-12 justify-items-center">
              <div className="bg-white/50 dark:bg-primary/10 rounded-lg p-4 max-w-75 w-full">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5K+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Early Believers</div>
              </div>
              <div className="bg-white/50 dark:bg-primary/10 rounded-lg p-4  max-w-75 w-full">
                <div className="text-2xl sm:text-3xl font-bold text-primary">30+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Days Until Launch</div>
              </div>
              <div className="bg-white/50 dark:bg-primary/10 rounded-lg p-4  max-w-75 w-full">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-foreground/60">Worth the Wait</div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 sm:p-12 border border-border max-w-[400px] mx-auto">
            {formState.isSubmitted ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
                <p className="text-foreground/70 mb-6">
                  We&apos;ve added {formState.name || 'you'} to our launch notification list. Get ready for something special!
                </p>
                <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Check your email for exclusive updates
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    disabled={formState.isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 pl-12 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      disabled={formState.isLoading}
                    />
                  </div>
                </div>

                {formState.error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                    {formState.error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base rounded-lg transition-all"
                  disabled={formState.isLoading}
                >
                  {formState.isLoading ? 'Saving...' : 'Notify Me When Live'}
                </Button>

                <p className="text-xs text-foreground/60 text-center">
                  We&apos;ll only email you about our launch and exclusive early-bird offers. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center">
            {/* Social Media Links */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">Follow Us</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20 border border-sky-200 dark:border-sky-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Twitter className="h-5 w-5 text-sky-500 dark:text-sky-400 group-hover:text-sky-600 transition" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition">Twitter</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 transition" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition">LinkedIn</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border border-indigo-200 dark:border-indigo-700 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Facebook className="h-5 w-5 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 transition" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
