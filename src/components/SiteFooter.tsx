import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-core">
          {site.core} {site.tool}
        </p>
        <p className="footer-line">If we disappear, your files don&apos;t.</p>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/">/</Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.path}
            </Link>
          ))}
        </nav>
        <p className="footer-meta">
          <span>{site.name}</span>
          <span aria-hidden="true">·</span>
          <span>{site.domain}</span>
          <span aria-hidden="true">·</span>
          <span>No account. No suite. No tracking.</span>
        </p>
      </div>
    </footer>
  );
}
