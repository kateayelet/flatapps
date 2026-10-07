import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import { essays } from "@/lib/essays";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flat Out",
  description:
    "Manifesto and editorial notes on software that stays out of your way.",
  alternates: { canonical: "/flat-out" },
};

export default function FlatOutIndexPage() {
  return (
    <PageShell currentPath="/flat-out">
      <TitleBlock
        sheet="A0"
        path="flatapp.is/flat-out"
        subject="Editorial index · software that stays out of the way"
      />

      <section className="hero rise">
        <p className="kicker">Flat Out</p>
        <h1 className="page-lead">Notes on software that stays out of your way.</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">
          Not a blog of launches. Short pieces on the habits that turn a tool
          into an owner.
        </p>
      </section>

      <ol className="essay-index section">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link className="essay-link" href={`/flat-out/${essay.slug}`}>
              <p className="essay-meta">
                SHEET {essay.sheet} · {essay.date}
              </p>
              <h2>{essay.title}</h2>
              <p className="essay-dek">{essay.dek}</p>
            </Link>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
