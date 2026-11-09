import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCall } from '@/components/StickyMobileCall';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesOverviewPage } from '@/pages/ServicesOverviewPage';

import { ServiceAreasOverviewPage } from '@/pages/ServiceAreasOverviewPage';
import { LocationDetailPage } from '@/pages/LocationDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceLocationPage } from '@/pages/ServiceLocationPage';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';

const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/service-areas" element={<ServiceAreasOverviewPage />} />
          {LOCATION_SLUGS.map((slug) => (
            <Route
              key={slug}
              path={`/service-areas/${slug}`}
              element={<LocationDetailPage slug={slug} />}
            />
          ))}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Service-location landing pages: /{service-slug}-{location-slug} */}
          {SERVICE_SLUGS.map((serviceSlug) =>
            LOCATION_SLUGS.map((locationSlug) => (
              <Route
                key={`${serviceSlug}-${locationSlug}`}
                path={`/${serviceSlug}-${locationSlug}`}
                element={
                  <ServiceLocationPage serviceSlug={serviceSlug} locationSlug={locationSlug} />
                }
              />
            )),
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCall />
    </div>
  );
}

export default App;
