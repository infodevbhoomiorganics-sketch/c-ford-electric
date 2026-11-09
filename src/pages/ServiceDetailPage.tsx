import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, MapPin, Wrench, ClipboardList, ShieldCheck } from 'lucide-react';
import { getService, SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { IMAGES } from '@/data/images';
import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqList } from '@/components/FaqList';
import { CallButton } from '@/components/CallButton';
import { CallCtaSection } from '@/components/CallCtaSection';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getService(slug);

  if (!service) {
    return (
      <section className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Service not found</h1>
        <p className="mt-3 text-navy-600">This service page does not exist.</p>
        <Link to="/services" className="btn-navy mt-6">
          View all services <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    );
  }

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceLd = serviceJsonLd(service.slug);
  const jsonLd: object[] = [
    breadcrumbJsonLd([
      { name: 'Electrical Services', href: '/services' },
      { name: service.name, href: `/services/${service.slug}` },
    ]),
    faqJsonLd(service.faqs),
  ];
  if (serviceLd) jsonLd.unshift(serviceLd);

  return <ServiceDetailContent slug={service.slug} jsonLd={jsonLd} related={related} />;
}

function ServiceDetailContent({
  slug,
  jsonLd,
  related,
}: {
  slug: string;
  jsonLd: object[];
  related: typeof SERVICES;
}) {
  const service = getService(slug)!;

  useSeo({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: IMAGES[service.image],
    jsonLd,
  });

  const crumbs = [
    { name: 'Electrical Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.h1}
        intro={service.intro}
        crumbs={crumbs}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={IMAGES[service.image]}
                  alt={`${service.name} performed by C Ford Electric in Oklahoma City, OK`}
                  className="h-72 w-full object-cover sm:h-80"
                  loading="lazy"
                />
              </div>

              <h2 className="mt-10 text-2xl font-extrabold text-navy-900">
                Common {service.name.toLowerCase()} problems we address
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
                How the {service.name.toLowerCase()} process works
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
                {service.detail.map((p, i) => (
                  <p key={i} className="mt-4 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>

              {/* FAQs */}
              <h2 className="mt-12 text-2xl font-extrabold text-navy-900">
                {service.name} FAQs
              </h2>
              <div className="mt-6">
                <FaqList faqs={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <Phone className="h-5 w-5 text-gold-600" /> Call about this service
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">
                    Tell us what you need and we will confirm availability and next steps.
                  </p>
                  <div className="mt-4">
                    <CallButton size="md" label="Call" showNumber />
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <MapPin className="h-5 w-5 text-gold-600" /> Available in
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {LOCATIONS.map((l) => (
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

                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900">
                    <Wrench className="h-5 w-5 text-gold-600" /> Related services
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {related.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="group flex items-center justify-between text-sm text-navy-700 hover:text-gold-600"
                        >
                          <span>{s.name}</span>
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
        heading={`Need ${service.name.toLowerCase()} in Oklahoma City?`}
        subheading={`Call C Ford Electric at ${SITE.phoneDisplay} and describe what you need. We handle ${service.name.toLowerCase()} for homes and businesses across the Oklahoma City metro.`}
      />
    </>
  );
}
