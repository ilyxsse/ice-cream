'use client';

import IceCreamBuilder from '@/components/IceCreamBuilder';

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-[var(--background)] text-[var(--foreground)] font-sans">
      <IceCreamBuilder />
    </div>
  );
}
