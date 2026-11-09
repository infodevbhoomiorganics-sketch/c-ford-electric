import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

export function StickyMobileCall() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3.5 font-bold text-navy-900 shadow-lg ring-4 ring-navy-900/10 animate-pulseRing lg:hidden"
      aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      Call Now
    </a>
  );
}
