import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { PageHero } from '@/components/PageHero';

export function PrivacyPage() {
  useSeo({
    title: 'Privacy Policy | C Ford Electric',
    description:
      'Privacy policy for C Ford Electric. Learn how we handle information collected through our website and what happens when you call us.',
    path: '/privacy-policy',
    noindex: true,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This privacy policy describes how C Ford Electric handles information related to this website."
        crumbs={[{ name: 'Privacy Policy', href: '/privacy-policy' }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-prose prose-tight">
          <p className="text-sm text-navy-500">Last updated: November 2026</p>

          <h2 className="mt-8 text-2xl font-bold">Overview</h2>
          <p className="mt-3">
            {SITE.legalName} operates this website at {SITE.domain}. This policy describes what
            information is collected when you visit the site and how it is used.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Information we collect</h2>
          <p className="mt-3">
            This website does not include contact forms, quote forms, or any other way to submit
            personal information directly through the site. The primary way we collect customer
            information is when you call us at {SITE.phoneDisplay}. Any information you share during
            that call — such as your name, address, and a description of the electrical work — is
            used solely to provide the service you requested.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Automatically collected information</h2>
          <p className="mt-3">
            Like most websites, this site may collect standard technical information through server
            logs or analytics, such as your browser type, device type, and the pages you visited.
            This information is aggregated and does not identify you personally.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Cookies</h2>
          <p className="mt-3">
            This website does not use marketing or tracking cookies. Any essential functionality
            used by the site is limited to what is required for the site to display and operate
            correctly.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Third-party services</h2>
          <p className="mt-3">
            This website embeds a Google Maps widget on the contact page to show our location.
            Google may collect information about your visit to that page in accordance with its own
            privacy policy. We do not control Google&apos;s data practices.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Your choices</h2>
          <p className="mt-3">
            Because this site does not collect personal information through forms, there is no
            account or profile associated with your visit. If you have questions about any
            information you provided by phone, call us at {SITE.phoneDisplay}.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Contact</h2>
          <p className="mt-3">
            If you have questions about this privacy policy, call {SITE.legalName} at{' '}
            {SITE.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
