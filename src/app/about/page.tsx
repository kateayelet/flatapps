import { Laws } from "@/components/Laws";
import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `${site.sentence} ${site.center}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell currentPath="/about">
      <TitleBlock
        sheet="99"
        path="flatapp.is/about"
        subject="About · a family, not a platform"
      />

      <section className="hero rise">
        <p className="kicker">{site.name}</p>
        <h1 className="page-lead">{site.center}</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">
          {site.sentence} {site.honest}
        </p>
      </section>

      <section className="section about-split">
        <div className="stack">
          <p>
            This site is the public face of that refusal. It is not a pitch
            for Flat Cloud, a Flat account, a Flat workspace, or a Flat
            database that glues the apps together. Those would be a new
            owner wearing a friendly name.
          </p>
          <p>
            The category, if you need one, is not “minimalist productivity.”
            It is architectural flatness: keep the user&apos;s artifact
            canonical, use boring formats, and leave the filesystem as the
            ecosystem.
          </p>
          <p>
            App Store links will appear when they are real. Until then the
            product pages say so. This site does not run analytics.
          </p>
        </div>
        <div className="soft-panel stack">
          <p className="kicker">Domain</p>
          <p>
            <code>flatapp.is</code> is the family home. Dedicated pages live
            at <code>/flatnote</code>, <code>/flatfile</code>,{" "}
            <code>/flatvoice</code>, and <code>/flat-out</code>.
          </p>
          <p>
            <Link href="/flat-out">Flat Out</Link> is the editorial voice —
            notes on software that stays out of the way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>The laws, again</h2>
          <p className="kicker">Same six. They don&apos;t rotate.</p>
        </div>
        <Laws />
      </section>
    </PageShell>
  );
}
