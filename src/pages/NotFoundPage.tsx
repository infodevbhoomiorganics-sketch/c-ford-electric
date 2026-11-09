import { Link } from 'react-router-dom';
import { Phone, Home, Wrench, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { CallButton } from '@/components/CallButton';

export function NotFoundPage() {
  useSeo({
    title: 'Page Not Found | C Ford Electric',
    description:
      'The page you were looking for could not be found. Call C Ford Electric at (405) 326-4239 for electrical service in the Oklahoma City metro.',
    path: '/404',
    noindex: true,
  });

  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-7xl font-extrabold text-gold-400 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-md text-navy-200">
          The page may have moved or no longer exists. You can head back home, explore our
          electrical services, or call us directly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-outline">
            <Home className="h-5 w-5" /> Back to Home
          </Link>
          <CallButton size="md" label="Call" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-navy-200 hover:text-gold-300">
            <Wrench className="h-4 w-4 text-gold-400" /> Electrical Services
          </Link>
          <Link to="/service-areas" className="inline-flex items-center gap-1.5 text-navy-200 hover:text-gold-300">
            <MapPin className="h-4 w-4 text-gold-400" /> Service Areas
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-1.5 text-navy-200 hover:text-gold-300">
            <Phone className="h-4 w-4 text-gold-400" /> Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
