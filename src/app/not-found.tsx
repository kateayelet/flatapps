import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageShell currentPath="">
      <TitleBlock
        sheet="404"
        path="flatapp.is/missing"
        subject="This path is not a file we published"
      />
      <section className="hero">
        <h1 className="page-lead">No such file.</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">
          The address does not resolve to a page. The rest of the folder is
          still here.
        </p>
        <div className="cta-row">
          <Link className="cta" href="/">
            Return home
          </Link>
          <Link className="cta cta-ghost" href="/flat-out">
            Flat Out
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
