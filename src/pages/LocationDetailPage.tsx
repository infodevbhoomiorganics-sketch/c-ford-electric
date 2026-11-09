import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Wrench } from 'lucide-react';
import { getLocation, LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';
import { IMAGES } from '@/data/images';
import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { FaqList } from '@/components/FaqList';
import { CallButton } from '@/components/CallButton';
import { CallCtaSection } from '@/components/CallCtaSection';
import { SectionHeading } from '@/components/SectionHeading';

export function LocationDetailPage({ slug }: { slug: string }) {
  const location = getLocation(slug);

  if (!location) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Service area not found</h1>
        <p className="mt-3 text-navy-600">This service area page does not exist.</p>
        <Link to="/service-areas" className="btn-navy mt-6">
          View all service areas <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    );
  }

  const jsonLd = [
    {
      ...localBusinessJsonLd,
      '@id': `${SITE.url}/${location.slug}#localbusiness`,
      areaServed: { '@type': 'City', name: location.city },
    },
    breadcrumbJsonLd([
      { name: 'Service Areas', href: '/service-areas' },
      { name: `${location.city}, ${location.state}`, href: `/service-areas/${location.slug}` },
    ]),
    faqJsonLd(location.faqs),
  ];

  useSeo({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-areas/${location.slug}`,
    image: IMAGES.outdoorPanel,
    jsonLd,
  });

  const crumbs = [
    { name: 'Service Areas', href: '/service-areas' },
    { name: `${location.city}, ${location.state}`, href: `/service-areas/${location.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={`Electrician in ${location.city}, ${location.state}`}
        intro={location.intro}
        crumbs={crumbs}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={IMAGES.outdoorPanel}
                  alt={`C Ford Electric electrician working on an electrical panel in ${location.city}, ${location.state}`}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>

              <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
                Electrical services in {location.city}
              </h2>
              <p className="mt-4 text-navy-600 leading-relaxed">{location.local}</p>

              <h3 className="mt-10 text-xl font-bold text-navy-900">
                Services available in {location.city}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-${location.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card transition-all hover:border-gold-300 hover:shadow-cardHover"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-gold-600">
                      <Wrench className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-navy-900">{s.name}</p>
                      <p className="truncate text-xs text-navy-500">in {location.city}, {location.state}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-gold-600" />
                  </Link>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-extrabold text-navy-900">
                {location.city} electrician FAQs
              </h2>
              <div className="mt-6">
                <FaqList faqs={location.faqs} />
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <Phone className="h-5 w-5 text-gold-600" /> Call about {location.city}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">
                    Call us with your {location.city} address and the electrical work you need.
                  </p>
                  <div className="mt-4">
                    <CallButton size="md" label="Call" showNumber />
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <MapPin className="h-5 w-5 text-gold-600" /> Other service areas
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {LOCATIONS.filter((l) => l.slug !== location.slug).map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={`/service-areas/${l.slug}`}
                          className="group flex items-center justify-between text-sm text-navy-700 hover:text-gold-600"
                        >
                          <span>{l.city}, {l.state}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-gold-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CallCtaSection
        heading={`Need an electrician in ${location.city}, ${location.state}?`}
        subheading={`Call C Ford Electric at ${SITE.phoneDisplay} and tell us your address and the electrical work you need. We serve ${location.city} and the surrounding Oklahoma City metro area.`}
      />
    </>
  );
}
