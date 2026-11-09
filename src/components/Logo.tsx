import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '@/data/site';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400 shadow-card transition-transform duration-200 group-hover:scale-105">
        <Zap className="h-6 w-6 text-navy-900" strokeWidth={2.5} fill="currentColor" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
          C Ford Electric
        </span>
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${light ? 'text-gold-300' : 'text-gold-600'}`}>
          Oklahoma City Electricians
        </span>
      </span>
    </Link>
  );
}
