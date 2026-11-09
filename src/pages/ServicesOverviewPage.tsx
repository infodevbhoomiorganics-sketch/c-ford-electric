import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wrench, Plug, Gauge, Lightbulb, Home as HomeIcon, Building2, HardHat, Search, CloudRain, type LucideIcon } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { IMAGES } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import { breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CallCtaSection } from '@/components/CallCtaSection';
import { CallButton } from '@/components/CallButton';

const ICONS: Record<string, LucideIcon> = {
  'electrical-repair': Wrench,
  'electrical-installation': Plug,
  'electrical-panel-upgrade': Gauge,
  'electrical-wiring': Zap,
  'lighting-installation': Lightbulb,
  'residential-electrician': HomeIcon,
  'commercial-electrician': Building2,
  'new-construction-electrical': HardHat,
  'electrical-inspection': Search,
  'storm-damage-repair': CloudRain,
};

export function ServicesOverviewPage() {
  useSeo({
    title: 'Electrical Services in Oklahoma City, OK | C Ford Electric',
    description:
      'Electrical services in Oklahoma City, OK — repair, installation, panel upgrades, wiring, lighting, residential, commercial, new construction, inspections, and storm damage repair. Call (405) 326-4239.',
    path: '/services',
    jsonLd: [breadcrumbJsonLd([{ name: 'Electrical Services', href: '/services' }])],
  });

  return (
    <>
      <PageHero
        eyebrow="Electrical Services"
        title="Electrical services across the Oklahoma City metro"
        intro="C Ford Electric provides residential, commercial, and industrial electrical services throughout Oklahoma City and the surrounding area. Every job is completed to current Oklahoma electrical code."
        crumbs={[{ name: 'Electrical Services', href: '/services' }]}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete electrical service for every property type"
            intro="From a single outlet repair to a full commercial build-out, these are the electrical services C Ford Electric provides across the Oklahoma City metro."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.slug] ?? Zap;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-oklahoma-city-ok`}
                  className="card group flex flex-col overflow-hidden p-0"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={IMAGES[s.image]}
                      alt={`${s.name} performed by C Ford Electric in Oklahoma City, OK`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400 text-navy-900">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wide text-gold-600">
                      {s.category}
                    </span>
                    <h3 className="mt-1.5 text-xl font-bold text-navy-900">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 group-hover:text-gold-700">
                      View {s.name} details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CallCtaSection
        heading="Not sure which service you need?"
        subheading="Call C Ford Electric and describe the issue. We will help you figure out exactly what kind of electrical work is required."
      />
    </>
  );
}
