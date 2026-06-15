"use client";
import Link from "next/link";


export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-center h-16 gap-8">
          <Link
            href="/"
            className="text-xl text-center font-bold text-primary hover:text-primary/80 transition"
          >
            UK Business Gateway
          </Link>
        </div>
      </div>
    </nav>
  );
}
