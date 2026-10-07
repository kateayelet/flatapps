import Link from "next/link";
import { FamilyMark } from "@/components/FamilyMark";
import { nav, site } from "@/lib/site";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <FamilyMark size={48} />
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-domain">{site.domain}</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => {
            const current =
              currentPath === item.href ||
              currentPath.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={current ? "page" : undefined}
              >
                <span className="nav-path">{item.path}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
