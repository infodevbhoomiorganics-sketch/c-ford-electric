import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-500">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold-600" aria-label="Home">
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
              {item.href && !last ? (
                <Link to={item.href} className="hover:text-gold-600">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? 'font-semibold text-navy-700' : ''}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
