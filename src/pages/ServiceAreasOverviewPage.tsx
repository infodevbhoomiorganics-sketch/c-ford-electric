import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CallCtaSection } from '@/components/CallCtaSection';
import { CallButton } from '@/components/CallButton';

export function ServiceAreasOverviewPage() {
  useSeo({
    title: 'Service Areas | C Ford Electric | Oklahoma City Metro Electricians',
    description:
      'C Ford Electric serves Oklahoma City, Newcastle, Del City, Midwest City, Moore, and the surrounding Oklahoma City metro area. Call (405) 326-4239 for electrical service.',
    path: '/service-areas',
    jsonLd: [breadcrumbJsonLd([{ name: 'Service Areas', href: '/service-areas' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Electrical service across the Oklahoma City metro"
        intro="C Ford Electric is based in Oklahoma City and serves the surrounding metro communities. Call us with your address and we will confirm service availability."
        crumbs={[{ name: 'Service Areas', href: '/service-areas' }]}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={IMAGES.outdoorFusebox}
                alt="C Ford Electric repairing an outdoor electrical panel in the Oklahoma City metro"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Where We Work"
                title="Verified service areas"
                intro="These are the communities C Ford Electric currently serves. If your city is not listed, call us — we may still be able to help depending on the project."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {LOCATIONS.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/service-areas/${l.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-5 py-4 shadow-card transition-all hover:border-gold-300 hover:shadow-cardHover"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gold-600" />
                      <span className="font-semibold text-navy-900">
                        {l.city}, {l.state}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-1 group-hover:text-gold-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCtaSection
        heading="Is your city on the list?"
        subheading="Call C Ford Electric with your address and the electrical work you need. We will confirm whether we serve your area and what the next step looks like."
      />
    </>
  );
}
