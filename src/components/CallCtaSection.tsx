import { Phone, Clock, ShieldCheck } from 'lucide-react';
import { SITE } from '@/data/site';

export function CallCtaSection({
  heading = 'Have an electrical question? Let\u2019s talk.',
  subheading = 'Call C Ford Electric and speak directly with an Oklahoma City electrician. No forms, no waiting — just answers and honest service.',
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <Phone className="h-4 w-4" /> Call C Ford Electric
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-white text-balance sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-navy-200">{subheading}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-xl font-extrabold text-navy-900 shadow-card transition-all duration-200 hover:bg-gold-300 hover:shadow-cardHover"
            >
              <Phone className="h-6 w-6" strokeWidth={2.5} />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-300">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-400" /> Mon–Fri: 8:00 AM – 5:30 PM
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-400" /> Free consultations on all electrical services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
