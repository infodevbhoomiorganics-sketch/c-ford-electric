import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, MapPin, Wrench } from 'lucide-react';
import { getService, SERVICES, type Service } from '@/data/services';
import { getLocation, LOCATIONS, type Location } from '@/data/locations';
import { IMAGES } from '@/data/images';
import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { FaqList } from '@/components/FaqList';
import { CallButton } from '@/components/CallButton';
import { CallCtaSection } from '@/components/CallCtaSection';

type Props = { serviceSlug: string; locationSlug: string };

export function ServiceLocationPage({ serviceSlug, locationSlug }: Props) {
  const service = getService(serviceSlug);
  const location = getLocation(locationSlug);

  if (!service || !location) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Page not found</h1>
        <p className="mt-3 text-navy-600">This page does not exist.</p>
        <Link to="/" className="btn-navy mt-6">
          Back to Home <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    );
  }

  const path = `/${service.slug}-${location.slug}`;
  const fullName = `${service.name} in ${location.city}, ${location.state}`;

  const seoTitle = `${service.name} ${location.city}, ${location.state} | C Ford Electric | ${SITE.phoneDisplay}`;
  const seoDesc = `${service.name} in ${location.city}, ${location.state}. ${service.short} Call C Ford Electric at ${SITE.phoneDisplay} for ${service.name.toLowerCase()} in ${location.city}.`;

  const combinedFaqs = [
    {
      q: `Do you offer ${service.name.toLowerCase()} in ${location.city}, ${location.state}?`,
      a: `Yes. C Ford Electric provides ${service.name.toLowerCase()} to homes and businesses in ${location.city}, ${location.state}. ${location.context} Call us at ${SITE.phoneDisplay} with your address and we will confirm availability.`,
    },
    {
      q: `How do I schedule ${service.name.toLowerCase()} in ${location.city}?`,
      a: `Call us at ${SITE.phoneDisplay}. We do not offer online booking — all scheduling is handled directly by phone. Tell us your ${location.city} address and the work you need and we will take it from there.`,
    },
    ...service.faqs.slice(0, 2),
  ];

  const serviceLd = serviceJsonLd(service.slug);
  const jsonLd: object[] = [
    breadcrumbJsonLd([{ name: fullName, href: path }]),
    faqJsonLd(combinedFaqs),
  ];
  if (serviceLd) {
    jsonLd.unshift({ ...serviceLd, areaServed: { '@type': 'City', name: location.city } });
  }

  return (
    <ServiceLocationContent
      service={service}
      location={location}
      path={path}
      seoTitle={seoTitle}
      seoDesc={seoDesc}
      combinedFaqs={combinedFaqs}
      jsonLd={jsonLd}
    />
  );
}

function ServiceLocationContent({
  service,
  location,
  path,
  seoTitle,
  seoDesc,
  combinedFaqs,
  jsonLd,
}: {
  service: Service;
  location: Location;
  path: string;
  seoTitle: string;
  seoDesc: string;
  combinedFaqs: { q: string; a: string }[];
  jsonLd: object[];
}) {
  useSeo({
    title: seoTitle,
    description: seoDesc,
    path,
    image: IMAGES[service.image],
    jsonLd,
  });

  const fullName = `${service.name} in ${location.city}, ${location.state}`;
  const intro = `${service.intro.replace(/Oklahoma City metro area\./, `${location.city} and the Oklahoma City metro area.`)} ${location.context}`;

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const relatedLocations = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 4);

  const crumbs = [{ name: fullName, href: path }];

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={fullName}
        intro={intro}
        crumbs={crumbs}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={IMAGES[service.image]}
                  alt={`${service.name} performed by C Ford Electric for a property in ${location.city}, ${location.state}`}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>

              <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
                {service.name} problems we solve in {location.city}
              </h2>
              <ul className="mt-5 space-y-3">
                {service.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-extrabold text-navy-900">
                Our {service.name.toLowerCase()} process in {location.city}
              </h2>
              <div className="mt-6 space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-lg font-extrabold text-gold-400">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                      <p className="mt-1.5 text-navy-600 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 prose-tight">
                <p>
                  {location.local} If you need {service.name.toLowerCase()} in {location.city},
                  C Ford Electric is ready to help — call {SITE.phoneDisplay} and tell us about
                  your project.
                </p>
                <p className="mt-4">
                  {service.detail[0]} Our team serves {location.descriptor}, and {location.city}{' '}
                  is a regular part of our Oklahoma City metro service area.
                </p>
              </div>

              {/* FAQs */}
              <h2 className="mt-12 text-2xl font-extrabold text-navy-900">
                {service.name} {location.city} FAQs
              </h2>
              <div className="mt-6">
                <FaqList faqs={combinedFaqs} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <Phone className="h-5 w-5 text-gold-600" /> Call about {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">
                    Tell us your {location.city} address and the electrical work you need.
                  </p>
                  <div className="mt-4">
                    <CallButton size="md" label="Call" showNumber />
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <Wrench className="h-5 w-5 text-gold-600" /> Other services in {location.city}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}-${location.slug}`}
                          className="group flex items-center justify-between text-sm text-navy-700 hover:text-gold-600"
                        >
                          <span>{s.name}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-gold-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <MapPin className="h-5 w-5 text-gold-600" /> {service.name} nearby
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {relatedLocations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={`/${service.slug}-${l.slug}`}
                          className="group flex items-center justify-between text-sm text-navy-700 hover:text-gold-600"
                        >
                          <span>{service.name} in {l.city}, {l.state}</span>
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
        heading={`Need ${service.name.toLowerCase()} in ${location.city}, ${location.state}?`}
        subheading={`Call C Ford Electric at ${SITE.phoneDisplay} and tell us your address and the work you need. We handle ${service.name.toLowerCase()} across ${location.city} and the Oklahoma City metro area.`}
      />
    </>
  );
}
