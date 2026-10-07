import { ArtifactList } from "@/components/ArtifactList";
import { PageShell } from "@/components/PageShell";
import { StorePlaceholder } from "@/components/StorePlaceholder";
import { SupportContact } from "@/components/SupportContact";
import { TitleBlock } from "@/components/TitleBlock";
import { getApp } from "@/lib/apps";
import type { Metadata } from "next";
import Link from "next/link";

const app = getApp("flatnote");

export const metadata: Metadata = {
  title: app.name,
  description: `${app.lead} ${app.summary}`,
  alternates: { canonical: app.href },
};

export default function FlatNotePage() {
  return (
    <PageShell currentPath={app.href}>
      <TitleBlock
        sheet={app.sheet}
        path={`flatapp.is${app.href}`}
        subject={`${app.name} · ${app.extension} on disk`}
      />

      <section className="hero rise">
        <p className="kicker">{app.artifact}</p>
        <h1 className="page-lead">{app.lead}</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">{app.line}</p>
      </section>

      <section className="section stack">
        <p>
          Markdown on disk. The editor is a window.{" "}
          <code>textContent === source</code> — the UI may prettify; the source
          does not silently change.
        </p>
        <p>
          No account, because nothing an account would do. There is no
          workspace to join and no proprietary note object underneath the
          file. A note is a <code>.md</code> you can open in anything that
          reads text.
        </p>
        <p>
          Folders remain folders. If you want two notes next to each other,
          you put them in the same place. FlatNote does not invent a graph so
          it can charge rent on the relationship.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>On disk</h2>
          <p className="kicker">Boring formats</p>
        </div>
        <ArtifactList
          items={[
            {
              name: "notes/*.md",
              note: "The note is the file. Filenames you chose.",
            },
            {
              name: "folder/",
              note: "The index is the directory. No hidden library.",
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
            It will not silently rewrite your Markdown to please a renderer.
            It will not require a Flat account, a cloud notebook, or a sync
            identity we issued.
          </p>
          <p>If FlatNote disappeared tomorrow, the notes would still be notes.</p>
        </div>
        <StorePlaceholder appName={app.name} />
      </section>

      <SupportContact appName={app.name} privacyHref="https://kateayelet.github.io/flatnote/privacy.html" />

      <nav className="section" aria-label="Other Flat apps">
        <p className="kicker">Also in the folder</p>
        <ul className="cross-links">
          <li>
            <Link href="/flatfile">/flatfile</Link>
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
