import { HardHat, Building2, ShieldCheck, Phone, Hammer, Wrench } from 'lucide-react';
import { SITE } from '@/data/site';
import { IMAGES } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import { organizationJsonLd, breadcrumbJsonLd } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';
import { CallCtaSection } from '@/components/CallCtaSection';
import { SectionHeading } from '@/components/SectionHeading';
import { CallButton } from '@/components/CallButton';

const VALUES = [
  {
    icon: HardHat,
    title: 'Workmanship first',
    body: 'Every job — a single outlet repair or a full commercial build-out — is completed to current Oklahoma electrical code and tested before it goes live.',
  },
  {
    icon: ShieldCheck,
    title: 'Free consultations',
    body: 'C Ford Electric offers free consultations on all electrical services. Call us, describe what you need, and we will help you figure out the next step.',
  },
  {
    icon: Phone,
    title: 'Talk to a real electrician',
    body: 'No call centers, no online forms. When you call (405) 326-4239 you speak directly with the business about your electrical project.',
  },
  {
    icon: Building2,
    title: 'Commercial & industrial depth',
    body: 'Our experience spans commercial, retail, industrial, and medical facilities in addition to residential work across the Oklahoma City metro.',
  },
];

const SCOPE = [
  { icon: Wrench, label: 'Electrical repair' },
  { icon: Hammer, label: 'New construction' },
  { icon: Building2, label: 'Commercial build-outs' },
  { icon: ShieldCheck, label: 'Safety inspections' },
];

export function AboutPage() {
  useSeo({
    title: 'About C Ford Electric | Oklahoma City Electrical Contractors',
    description:
      'C Ford Electric LLC is an Oklahoma City electrical contractor serving residential, commercial, and industrial clients across the Oklahoma City metro. Learn about our approach and services.',
    path: '/about',
    jsonLd: [
      organizationJsonLd,
      breadcrumbJsonLd([{ name: 'About', href: '/about' }]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An Oklahoma City electrical contractor built on workmanship"
        intro="C Ford Electric LLC is an Oklahoma City electrical contractor serving residential, commercial, and industrial clients across the Oklahoma City metro area."
        crumbs={[{ name: 'About', href: '/about' }]}
      >
        <CallButton size="lg" label="Call" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="prose-tight">
              <SectionHeading
                eyebrow="Who We Are"
                title="C Ford Electric LLC"
              />
              <p className="mt-5">
                C Ford Electric LLC is an electrical contractor based in Oklahoma City, Oklahoma.
                Our work spans the full range of electrical services — residential, commercial, and
                industrial — including new construction, remodels, and ongoing service for existing
                properties throughout the Oklahoma City metro area.
              </p>
              <p className="mt-4">
                Our experience covers commercial, retail, industrial, medical, high-end residential,
                new construction, and remodel projects. From a single outlet repair to a complete
                commercial build-out, every job is completed to current Oklahoma electrical code.
              </p>
              <p className="mt-4">
                C. Ford Electric was named a 2022 Inc. 5000 honoree, a recognition reserved for the
                fastest-growing private companies in the United States.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={IMAGES.panelDrill}
                alt="C Ford Electric technician using a drill on an indoor circuit breaker panel"
                className="h-64 w-full rounded-2xl object-cover shadow-card sm:col-span-2"
                loading="lazy"
              />
              <img
                src={IMAGES.wiring}
                alt="Electrical wiring installation by C Ford Electric in Oklahoma City"
                className="h-48 w-full rounded-2xl object-cover shadow-card"
                loading="lazy"
              />
              <img
                src={IMAGES.lightbulb}
                alt="Lighting installation completed by C Ford Electric"
                className="h-48 w-full rounded-2xl object-cover shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we approach electrical work"
            intro="Every project is handled with the same attention to detail — whether it is a single repair or a complete electrical system for a new building."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={i} className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <v.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="rounded-3xl border border-navy-100 bg-navy-900 px-6 py-12 text-center sm:px-12">
            <SectionHeading
              eyebrow="What We Do"
              title="Electrical work across the Oklahoma City metro"
              intro="Residential, commercial, and industrial — repairs, installations, new construction, inspections, and storm damage repair."
              center
              light
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {SCOPE.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-2.5 text-navy-100">
                  <s.icon className="h-5 w-5 text-gold-400" />
                  <span className="font-semibold">{s.label}</span>
                </span>
              ))}
            </div>
            <div className="mt-10">
              <CallButton size="lg" label="Call" />
            </div>
          </div>
        </div>
      </section>

      <CallCtaSection
        heading="Want to know if we can help with your project?"
        subheading="Call C Ford Electric and describe what you need. We will tell you plainly whether it is in our scope and what the next step looks like."
      />
    </>
  );
}
