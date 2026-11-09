import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Zap, MapPin, ArrowRight } from 'lucide-react';
import { SITE, PRIMARY_NAV, type NavItem } from '@/data/site';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { Logo } from './Logo';
import { CallButton } from './CallButton';

function DesktopDropdown({ label, overviewLink, items }: {
  label: string;
  overviewLink: string;
  items: { name: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null); }
    setOpen(true);
  };
  const leave = () => {
    timeoutId && clearTimeout(timeoutId);
    const id = setTimeout(() => setOpen(false), 150);
    setTimeoutId(id);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <NavLink
        to={overviewLink}
        className={({ isActive }) =>
          `flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
            isActive ? 'text-gold-300' : 'text-navy-100 hover:text-white'
          }`
        }
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </NavLink>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl ring-1 ring-navy-900/5">
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-navy-700 transition-colors hover:bg-navy-50 hover:text-gold-600"
                >
                  <span className="font-medium">{item.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-navy-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
            <Link
              to={overviewLink}
              className="flex items-center justify-between border-t border-navy-100 bg-navy-50 px-4 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-navy-100"
            >
              {label === 'Electrical Services' ? 'View all electrical services' : 'View all service areas'}
              <ArrowRight className="h-4 w-4 text-gold-600" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

type MobileNavItem = NavItem & { subItems?: { name: string; href: string }[]; overviewLabel?: string };

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const serviceItems = SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}` }));
  const locationItems = LOCATIONS.map((l) => ({ name: `${l.city}, ${l.state}`, href: `/service-areas/${l.slug}` }));

  const mobileNavItems: MobileNavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Electrical Services', href: '/services', subItems: serviceItems, overviewLabel: 'All electrical services' },
    { label: 'Service Areas', href: '/service-areas', subItems: locationItems, overviewLabel: 'All service areas' },
    { label: 'Contact', href: '/contact' },
  ];

  const desktopNav: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Electrical Services', href: '/services' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/97 shadow-lg backdrop-blur' : 'bg-navy-900'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo light />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {desktopNav.map((item) =>
            item.label === 'Electrical Services' ? (
              <DesktopDropdown
                key={item.href}
                label="Electrical Services"
                overviewLink="/services"
                items={serviceItems}
              />
            ) : item.label === 'Service Areas' ? (
              <DesktopDropdown
                key={item.href}
                label="Service Areas"
                overviewLink="/service-areas"
                items={locationItems}
              />
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-gold-300' : 'text-navy-100 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <CallButton size="sm" label="Call" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy-900 transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[90vh] overflow-y-auto border-t border-navy-700' : 'max-h-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {mobileNavItems.map((item) => {
            const isExpanded = expandedMenu === item.label;
            if (!item.subItems) {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`rounded-md px-4 py-3 text-base font-semibold transition-colors ${
                    location.pathname === item.href
                      ? 'bg-navy-800 text-gold-300'
                      : 'text-navy-100 hover:bg-navy-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpandedMenu(isExpanded ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-navy-100 transition-colors hover:bg-navy-800 hover:text-white"
                  aria-expanded={isExpanded}
                >
                  {item.label}
                  <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="flex flex-col gap-0.5 pb-2 pl-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="flex items-center gap-2 rounded-md px-4 py-2.5 text-sm text-navy-200 transition-colors hover:bg-navy-800 hover:text-gold-300"
                      >
                        {item.label === 'Electrical Services' ? (
                          <Zap className="h-3.5 w-3.5 text-gold-500" />
                        ) : (
                          <MapPin className="h-3.5 w-3.5 text-gold-500" />
                        )}
                        {sub.name}
                      </Link>
                    ))}
                    <Link
                      to={item.href}
                      className="flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-bold text-gold-400 transition-colors hover:bg-navy-800"
                    >
                      {item.overviewLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-lg bg-gold-400 px-5 py-3.5 text-base font-bold text-navy-900"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
