import { ArtifactList } from "@/components/ArtifactList";
import { PageShell } from "@/components/PageShell";
import { StorePlaceholder } from "@/components/StorePlaceholder";
import { TitleBlock } from "@/components/TitleBlock";
import { getApp } from "@/lib/apps";
import type { Metadata } from "next";
import Link from "next/link";

const app = getApp("flatvoice");

export const metadata: Metadata = {
  title: app.name,
  description: `${app.lead} ${app.summary}`,
  alternates: { canonical: app.href },
};

export default function FlatVoicePage() {
  return (
    <PageShell currentPath={app.href}>
      <TitleBlock
        sheet={app.sheet}
        path={`flatapp.is${app.href}`}
        subject={`${app.name} · local speech, ordinary files`}
      />

      <section className="hero rise">
        <p className="kicker">{app.artifact}</p>
        <h1 className="page-lead">{app.lead}</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">
          No account. No cloud dependency. Nothing essential disappears if a
          company turns off a server.
        </p>
      </section>

      <section className="section stack">
        <p>
          Flat Voice is dictation that writes files you can read. Vocabulary,
          corrections, history, and config live beside the work — not in an
          account we issued, and not in a service that has to stay up for the
          words to remain yours.
        </p>
        <p>
          Speech is processed locally. The interesting state is not a mystery
          blob. It is <code>vocab.txt</code>, <code>corrections.tsv</code>,{" "}
          <code>history.tsv</code>, and <code>config.json</code>.
        </p>
        <p>
          Same folder, matching filenames. If another Flat app needs those
          artifacts, it can find them without a platform in the middle.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>On disk</h2>
          <p className="kicker">Compose through artifacts</p>
        </div>
        <ArtifactList
          items={[
            {
              name: "vocab.txt",
              note: "Words the recognizer should know. Plain text.",
            },
            {
              name: "corrections.tsv",
              note: "Replacements you approved. Not silent rewrites.",
            },
            {
              name: "history.tsv",
              note: "What was said, as a table you can keep or delete.",
            },
            {
              name: "config.json",
              note: "Settings as data. Inspectable. Copyable.",
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
            It will not require a Flat cloud, a voice account, or a workspace
            that holds the only good copy of what you said.
          </p>
          <p>
            If we disappear, the files don&apos;t. That includes the
            corrections you bothered to make.
          </p>
        </div>
        <StorePlaceholder appName={app.name} />
      </section>

      <nav className="section" aria-label="Other Flat apps">
        <p className="kicker">Also in the folder</p>
        <ul className="cross-links">
          <li>
            <Link href="/flatnote">/flatnote</Link>
          </li>
          <li>
            <Link href="/flatfile">/flatfile</Link>
          </li>
          <li>
            <Link href="/flat-out">/flat-out</Link>
          </li>
          <li>
            <Link href="/flatvoice/privacy">/flatvoice/privacy</Link>
          </li>
        </ul>
      </nav>
    </PageShell>
  );
}
