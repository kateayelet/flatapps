import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type PageShellProps = {
  children: React.ReactNode;
  currentPath?: string;
};

export function PageShell({ children, currentPath = "/" }: PageShellProps) {
  return (
    <div className="site">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SiteHeader currentPath={currentPath} />
      <main id="content" className="site-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
