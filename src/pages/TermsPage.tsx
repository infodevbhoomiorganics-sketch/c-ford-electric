import { SITE } from '@/data/site';
import { useSeo } from '@/hooks/useSeo';
import { PageHero } from '@/components/PageHero';

export function TermsPage() {
  useSeo({
    title: 'Terms & Conditions | C Ford Electric',
    description:
      'Terms and conditions for the C Ford Electric website. Read the terms that govern your use of this site.',
    path: '/terms',
    noindex: true,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="These terms govern your use of the C Ford Electric website."
        crumbs={[{ name: 'Terms & Conditions', href: '/terms' }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-prose prose-tight">
          <p className="text-sm text-navy-500">Last updated: November 2026</p>

          <h2 className="mt-8 text-2xl font-bold">Acceptance of terms</h2>
          <p className="mt-3">
            By accessing this website at {SITE.domain}, you agree to be bound by these terms and
            conditions. If you do not agree, please do not use the site.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Use of the site</h2>
          <p className="mt-3">
            This website provides information about {SITE.legalName} and the electrical services we
            offer in the Oklahoma City metro area. The content is provided for general informational
            purposes only and is not a substitute for professional advice specific to your property
            or situation.
          </p>

          <h2 className="mt-8 text-2xl font-bold">No online scheduling</h2>
          <p className="mt-3">
            This website does not offer online booking, estimates, or quote requests. All service
            requests are handled by phone. Calling {SITE.phoneDisplay} does not guarantee
            availability of service; scheduling and availability are confirmed directly with the
            business.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Service information</h2>
          <p className="mt-3">
            The services described on this site are provided by {SITE.legalName}. Specific service
            availability, scope, and pricing are discussed by phone and confirmed before any work
            begins.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Intellectual property</h2>
          <p className="mt-3">
            All content on this website — including text, graphics, logos, and design — is the
            property of {SITE.legalName} or its licensors and may not be reproduced without
            permission.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Limitation of liability</h2>
          <p className="mt-3">
            {SITE.legalName} is not liable for any damages arising from the use of this website or
            from reliance on the information it contains. Electrical work should always be performed
            by a qualified electrician.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Changes to these terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the site after changes are
            posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be directed to {SITE.legalName} at {SITE.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
