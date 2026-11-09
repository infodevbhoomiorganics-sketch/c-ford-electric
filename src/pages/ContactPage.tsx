import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { localBusinessJsonLd, breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { CallButton } from '@/components/CallButton';

export function ContactPage() {
  useSeo({
    title: 'Contact C Ford Electric | Oklahoma City Electricians | (405) 326-4239',
    description:
      'Contact C Ford Electric in Oklahoma City, OK. Call (405) 326-4239 for electrical service across the Oklahoma City metro. Located at 6209 SE 74th St, Oklahoma City, OK 73135.',
    path: '/contact',
    jsonLd: [
      localBusinessJsonLd,
      breadcrumbJsonLd([{ name: 'Contact', href: '/contact' }]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call C Ford Electric"
        intro="The fastest way to get electrical help is to call us directly. We do not use online forms — every project starts with a phone call."
        crumbs={[{ name: 'Contact', href: '/contact' }]}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">Business information</h2>
              <p className="mt-3 text-navy-600">
                Call {SITE.phoneDisplay} and speak directly with C Ford Electric about your
                electrical project. We serve Oklahoma City, Newcastle, Del City, Midwest City,
                Moore, and the surrounding metro area.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={SITE.phoneHref}
                  className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:border-gold-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-navy-900">
                    <Phone className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-navy-400">Phone</p>
                    <p className="text-lg font-extrabold text-navy-900 group-hover:text-gold-600">
                      {SITE.phoneDisplay}
                    </p>
                    <p className="text-sm text-navy-500">Tap to call now</p>
                  </div>
                </a>

                <a
                  href={SITE.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:border-gold-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <MapPin className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-navy-400">Address</p>
                    <p className="font-bold text-navy-900 group-hover:text-gold-600">
                      {SITE.address.full}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm text-gold-600">
                      <Navigation className="h-3.5 w-3.5" /> View on Google Maps
                    </p>
                  </div>
                </a>

                <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                      <Clock className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="w-full">
                      <p className="text-xs font-bold uppercase tracking-wide text-navy-400">Hours</p>
                      <ul className="mt-2 divide-y divide-navy-50 text-sm">
                        {SITE.hours.map((h) => (
                          <li key={h.day} className="flex justify-between py-1.5">
                            <span className="font-semibold text-navy-700">{h.day}</span>
                            <span className="text-navy-600">{h.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <CallButton size="lg" label="Call C Ford Electric" />
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-extrabold text-navy-900">Find us</h2>
              <p className="mt-3 text-navy-600">
                C Ford Electric is located at {SITE.address.street}, {SITE.address.city},{' '}
                {SITE.address.state} {SITE.address.zip}.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-navy-100 shadow-card">
                <iframe
                  src={SITE.mapsEmbed}
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '420px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Map showing C Ford Electric at ${SITE.address.full}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
