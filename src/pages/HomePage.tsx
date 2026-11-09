import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  Wrench,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Building2,
  Home as HomeIcon,
  HardHat,
  Lightbulb,
  Plug,
  Gauge,
  Search,
  CloudRain,
  Hammer,
  CheckCircle2,
  Stethoscope,
  Store,
  Factory,
  type LucideIcon,
} from 'lucide-react';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { IMAGES } from '@/data/images';
import { useSeo } from '@/hooks/useSeo';
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/structuredData';
import { CallButton } from '@/components/CallButton';
import { CallCtaSection } from '@/components/CallCtaSection';
import { SectionHeading } from '@/components/SectionHeading';
import { FaqList } from '@/components/FaqList';

const SERVICE_ICONS: Record<string, LucideIcon> = {
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

const HOW_STEPS = [
  {
    icon: Phone,
    title: 'Call C Ford Electric',
    body: 'Call (405) 326-4239 and tell us what you are experiencing — a repair, an installation, or a larger project.',
  },
  {
    icon: Wrench,
    title: 'Explain the issue',
    body: 'Describe the electrical issue or the work you need. The more detail you share, the better we can prepare.',
  },
  {
    icon: Clock,
    title: 'Discuss availability',
    body: 'We discuss service availability directly by phone and answer any questions about the work and timeline.',
  },
  {
    icon: Hammer,
    title: 'Confirm next steps',
    body: 'We confirm the next steps with you and schedule the work. No online booking — everything is arranged by phone.',
  },
];

const WHY = [
  {
    icon: HardHat,
    title: 'Established Oklahoma contractor',
    body: 'C Ford Electric LLC is an Oklahoma City electrical contractor serving residential, commercial, and industrial clients across the metro.',
  },
  {
    icon: Building2,
    title: 'Commercial & industrial experience',
    body: 'Our work spans commercial, retail, industrial, medical, high-end residential, new construction, and remodels throughout the Oklahoma City area.',
  },
  {
    icon: ShieldCheck,
    title: 'Free consultations',
    body: 'C Ford Electric offers free consultations on all electrical services. Call us and describe what you need — we will help you figure out the next step.',
  },
  {
    icon: Star,
    title: '2022 Inc. 5000 honoree',
    body: 'C. Ford Electric was named a 2022 Inc. 5000 honoree — recognition reserved for the fastest-growing private companies in the United States.',
  },
];

const HOME_FAQS = [
  {
    q: 'What areas does C Ford Electric serve?',
    a: 'We serve Oklahoma City, Newcastle, Del City, Midwest City, Moore, Edmond, Norman, Choctaw, Spencer, Yukon, and the surrounding Oklahoma City metro area. Call us with your address and we will confirm service availability.',
  },
  {
    q: 'Do you work on both residential and commercial properties?',
    a: 'Yes. C Ford Electric performs residential, commercial, and industrial electrical work throughout the Oklahoma City metro, including new construction and remodels.',
  },
  {
    q: 'How do I schedule electrical work?',
    a: 'Call us at (405) 326-4239. We do not offer online booking — all scheduling and service availability is discussed directly by phone.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes. C Ford Electric offers free consultations on all electrical services. Call and describe what you need and we will help you determine the next step.',
  },
  {
    q: 'What are your business hours?',
    a: 'We are open Monday through Friday, 8:00 AM to 5:30 PM. Saturday is by appointment and Sunday we are closed.',
  },
  {
    q: 'Can you upgrade my electrical panel?',
    a: 'Yes. Panel upgrades and replacements are one of our core services, for both homes and commercial properties. Call us to discuss your panel and load requirements.',
  },
  {
    q: 'Do you handle storm damage repair?',
    a: 'Yes. Oklahoma storms can damage service entrances, meter bases, panels, and wiring. We repair storm-damaged electrical systems across the Oklahoma City metro and coordinate with the utility where needed.',
  },
  {
    q: 'Can you do electrical work for commercial and industrial facilities?',
    a: 'Yes. C Ford Electric specializes in commercial, retail, industrial, and medical electrical work, including tenant build-outs, new construction, and service for existing facilities.',
  },
];

const PROJECT_TYPES = [
  { icon: HomeIcon, title: 'High-end residential', body: 'Custom homes, remodels, and whole-home electrical upgrades for homeowners across the Oklahoma City metro.' },
  { icon: Store, title: 'Retail & commercial', body: 'Tenant build-outs, retail lighting, and commercial service work for businesses throughout Oklahoma City.' },
  { icon: Factory, title: 'Industrial', body: 'Industrial electrical installations and service for facilities that require reliable, code-compliant power.' },
  { icon: Stethoscope, title: 'Medical facilities', body: 'Electrical work for medical facilities where uptime and compliance are critical to operations.' },
];

const CAPABILITIES = [
  'Panel upgrades and replacements',
  'Electrical repair and troubleshooting',
  'New construction electrical',
  'Residential and commercial wiring',
  'Indoor and outdoor lighting installation',
  'Electrical safety inspections',
  'Storm damage electrical repair',
  'Outlet, switch, and fixture installation',
  'Commercial build-outs and remodels',
  'Dedicated circuits and EV charger circuits',
];

export function HomePage() {
  useSeo({
    title: 'C Ford Electric | Oklahoma City Electricians | (405) 326-4239',
    description:
      'C Ford Electric is an Oklahoma City electrical contractor providing residential, commercial, and industrial electrical repair, installation, panel upgrades, wiring, and lighting. Call (405) 326-4239.',
    path: '/',
    jsonLd: [localBusinessJsonLd, organizationJsonLd, websiteJsonLd],
  });

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroPanel}
            alt="Electrician working on a circuit breaker panel with color-coded wiring in Oklahoma City"
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/60" />
        </div>
        <div className="container-page relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold-300">
              <span className="h-px w-6 bg-current opacity-60" />
              Oklahoma City Electrical Contractors
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Electrical Work Done Right Across Oklahoma City
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200 sm:text-xl">
              C Ford Electric is an Oklahoma City electrical contractor serving residential,
              commercial, and industrial clients. From panel upgrades and wiring to new construction
              and storm damage repair — call us and talk to a real electrician.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton size="lg" label="Call" />
              <Link
                to="/services"
                className="btn-outline"
              >
                Explore Electrical Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400" /> Oklahoma City, Oklahoma
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-400" /> Mon–Fri: 8:00 AM – 5:30 PM
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-gold-400" /> 2022 Inc. 5000 Honoree
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: MapPin, label: 'Based in Oklahoma City', value: '6209 SE 74th St' },
              { icon: Phone, label: 'Call us directly', value: SITE.phoneDisplay },
              { icon: HardHat, label: 'Serving', value: 'Residential · Commercial · Industrial' },
              { icon: Star, label: 'Recognition', value: '2022 Inc. 5000 Honoree' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-gold-600">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-bold text-navy-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Electrical Services"
            title="Electrical work for homes and businesses"
            intro="C Ford Electric handles the full range of electrical services across the Oklahoma City metro — repairs, installations, panel upgrades, wiring, lighting, new construction, and more."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? Zap;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="card group flex flex-col overflow-hidden p-0"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={IMAGES[s.image]}
                      alt={`${s.name} performed by C Ford Electric in Oklahoma City`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400 text-navy-900 shadow-card">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                      {s.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-navy-600">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 transition-colors group-hover:text-gold-700">
                      View {s.name} details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-navy">
              See all electrical services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities band */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={IMAGES.breakerPanel}
                alt="Organized circuit breaker panel with color-coded wiring installed by C Ford Electric"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Capabilities"
                title="Full-service electrical contracting"
                intro="From a single outlet repair to a complete commercial electrical system, C Ford Electric has the scope and experience to handle it."
              />
              <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2} />
                    <span className="text-sm font-medium text-navy-700">{cap}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <CallButton size="md" label="Call about your project" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why C Ford Electric"
            title="A contractor Oklahoma City can count on"
            intro="We are an established Oklahoma electrical contractor with experience across residential, commercial, and industrial work — and we offer free consultations on every service."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <item.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Project Types"
            title="Electrical work for every type of property"
            intro="C Ford Electric has experience across a wide range of project types — from custom homes to medical facilities."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_TYPES.map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-navy-900 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Service Areas"
                title="Serving 10 communities across the Oklahoma City metro"
                intro="C Ford Electric is based in Oklahoma City and serves the surrounding metro communities. Call us with your address and we will confirm service availability."
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
              <Link to="/service-areas" className="mt-6 inline-flex items-center gap-1.5 font-bold text-gold-600 hover:text-gold-700">
                View all service areas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={IMAGES.outdoorPanel}
                alt="C Ford Electric engineer working on an outdoor electrical panel in the Oklahoma City metro"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Oklahoma City context */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeading
                eyebrow="Local Knowledge"
                title="Built for Oklahoma City homes and businesses"
                intro="Oklahoma City's housing stock spans decades, and our electrical work reflects that reality."
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">Older homes</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Many Oklahoma City homes built before 1970 still have outdated panels, ungrounded wiring, or insufficient circuits. We handle panel upgrades, grounding updates, and whole-home rewiring to bring them up to code.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">New construction</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  New homes need correctly sized service, properly placed outlets, and circuits for modern loads like EV chargers. We handle complete rough-in and finish electrical for new builds across the metro.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">Oklahoma weather</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Oklahoma storms can damage service entrances, meter bases, and panels. We repair storm-damaged electrical systems and coordinate with the utility company where their equipment is involved.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">Commercial facilities</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  From retail build-outs to industrial and medical facilities, we provide commercial electrical work that keeps Oklahoma City businesses running with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting electrical help is simple"
            intro="Everything is handled by phone — no online booking, no forms to fill out. Just call and we will take it from there."
            center
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-navy-700 bg-navy-800 p-7">
                <span className="absolute right-5 top-5 font-display text-5xl font-extrabold text-navy-700">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-navy-900">
                  <step.icon className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-300">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CallButton size="lg" variant="outline" label="Call to get started" showNumber={false} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-prose">
          <SectionHeading
            eyebrow="FAQ"
            title="Electrical questions, answered"
            intro="Common questions about C Ford Electric and the electrical services we provide across the Oklahoma City metro."
            center
          />
          <div className="mt-10">
            <FaqList faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CallCtaSection />
    </>
  );
}
