import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';

export function CallButton({
  size = 'md',
  variant = 'solid',
  label = 'Call Now',
  showNumber = true,
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  label?: string;
  showNumber?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-7 py-4 text-lg',
  };
  const variants = {
    solid: 'bg-gold-400 text-navy-900 hover:bg-gold-300 shadow-card hover:shadow-cardHover',
    outline: 'border-2 border-gold-400 text-gold-500 hover:bg-gold-400 hover:text-navy-900',
    ghost: 'text-navy-800 hover:text-gold-600',
  };
  return (
    <a
      href={SITE.phoneHref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      <span>
        {label}
        {showNumber && <span className="ml-1 hidden sm:inline">— {SITE.phoneDisplay}</span>}
      </span>
    </a>
  );
}
