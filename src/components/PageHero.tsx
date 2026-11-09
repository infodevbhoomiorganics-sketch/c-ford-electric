import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
      {crumbs && (
        <div className="relative">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <div className="container-page relative py-14 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow text-gold-300">
              <span className="h-px w-6 bg-current opacity-60" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-extrabold text-white text-balance sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 text-lg leading-relaxed text-navy-200">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CrumbLink({ name, href }: { name: string; href: string }) {
  return (
    <Link to={href} className="inline-flex items-center gap-1 text-navy-500 hover:text-gold-600">
      {name} <ChevronRight className="h-3 w-3" />
    </Link>
  );
}
