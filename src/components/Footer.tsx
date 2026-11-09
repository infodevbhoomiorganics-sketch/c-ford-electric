import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Clock } from 'lucide-react';
import { SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              {SITE.description}
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-5 inline-flex items-center gap-2.5 rounded-lg bg-gold-400 px-5 py-3 text-base font-bold text-navy-900 transition-colors hover:bg-gold-300"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <Zap className="h-4 w-4 text-gold-400" fill="currentColor" /> Electrical Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-oklahoma-city-ok`}
                    className="text-navy-300 transition-colors hover:text-gold-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-semibold text-gold-300 hover:text-gold-200">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/service-areas/${l.slug}`}
                    className="text-navy-300 transition-colors hover:text-gold-300"
                  >
                    {l.city}, {l.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="font-semibold text-gold-300 hover:text-gold-200">
                  All service areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-3 text-navy-200 transition-colors hover:text-gold-300"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span className="font-semibold">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-navy-300 transition-colors hover:text-gold-300"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>{SITE.address.full}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>Mon–Fri: 8:00 AM – 5:30 PM</span>
              </li>
            </ul>
            <ul className="mt-5 space-y-2 text-sm">
              <li><Link to="/about" className="text-navy-300 hover:text-gold-300">About Us</Link></li>
              <li><Link to="/contact" className="text-navy-300 hover:text-gold-300">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-navy-300 hover:text-gold-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-navy-300 hover:text-gold-300">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6">
          <p className="text-center text-xs text-navy-400">
            &copy; {year} {SITE.legalName}. All rights reserved. Serving Oklahoma City, Newcastle, Del City, Midwest City, Moore, Edmond, Norman, Choctaw, Spencer, Yukon, and the surrounding Oklahoma City metro area.
          </p>
        </div>
      </div>
    </footer>
  );
}
