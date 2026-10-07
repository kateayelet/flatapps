import { ArtifactList } from "@/components/ArtifactList";
import { PageShell } from "@/components/PageShell";
import { StorePlaceholder } from "@/components/StorePlaceholder";
import { SupportContact } from "@/components/SupportContact";
import { TitleBlock } from "@/components/TitleBlock";
import { getApp } from "@/lib/apps";
import type { Metadata } from "next";
import Link from "next/link";

const app = getApp("flatfile");

export const metadata: Metadata = {
  title: app.name,
  description: `${app.lead} ${app.summary}`,
  alternates: { canonical: app.href },
};

export default function FlatFilePage() {
  return (
    <PageShell currentPath={app.href}>
      <TitleBlock
        sheet={app.sheet}
        path={`flatapp.is${app.href}`}
        subject={`${app.name} · the grid is the CSV`}
      />

      <section className="hero rise">
        <p className="kicker">{app.artifact}</p>
        <h1 className="page-lead">{app.lead}</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">{app.line}</p>
      </section>

      <section className="section stack">
        <p>
          No database. No linking layer. The filesystem is the index. You are
          not looking at a projection of a private store. You are looking at
          the file.
        </p>
        <p>
          Zero inference. <code>00123</code> stays <code>00123</code>. There
          is no silent type coercion, no helpful date, no midnight rewrite of
          a column that thought it knew better than the text.
        </p>
        <p>
          Fancy look. Forever file. The grid is the CSV — a window you can
          close. The work does not move into FlatFile. FlatFile sits on top
          of work you already have.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>On disk</h2>
          <p className="kicker">The artifact is canonical</p>
        </div>
        <ArtifactList
          items={[
            {
              name: "table.csv",
              note: "Source of truth. The grid is a view, not a venue.",
            },
            {
              name: "*.tsv",
              note: "Same law. Tabs instead of commas. Still a file.",
            },
            {
              name: "folder/",
              note: "Related tables sit next to each other. No base. No graph.",
            },
          ]}
        />
      </section>

      <section className="section about-split">
        <div className="soft-panel stack">
          <h2 className="page-lead" style={{ fontSize: "1.35rem" }}>
            What it will not do
          </h2>
          <p>
            It will not guess. It will not promote your spreadsheet into a
            Flat database, a workspace, or a suite that owns the cells.
          </p>
          <p>
            If the app disappeared tomorrow, the CSV would still open in
            anything that reads a table.
          </p>
        </div>
        <StorePlaceholder appName={app.name} />
      </section>

      <SupportContact appName={app.name} privacyHref="https://kateayelet.github.io/flatfile/privacy.html" />

      <nav className="section" aria-label="Other Flat apps">
        <p className="kicker">Also in the folder</p>
        <ul className="cross-links">
          <li>
            <Link href="/flatnote">/flatnote</Link>
          </li>
          <li>
            <Link href="/flatvoice">/flatvoice</Link>
          </li>
          <li>
            <Link href="/flat-out">/flat-out</Link>
          </li>
        </ul>
      </nav>
    </PageShell>
  );
}
