import { AppCard } from "@/components/AppCard";
import { Laws } from "@/components/Laws";
import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import { apps } from "@/lib/apps";
import { essays } from "@/lib/essays";
import { keepLines, site } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageShell currentPath="/">
      <TitleBlock
        sheet="00"
        path={`${site.domain}/`}
        subject="Family home · three apps, one refusal"
      />

      <section className="hero rise">
        <p className="kicker">Architectural flatness</p>
        <h1>{site.core}</h1>
        <p className="hero-sub">{site.tool}</p>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">{site.center}</p>
      </section>

      <section className="section rise rise-2">
        <div className="section-head">
          <h2>Position</h2>
          <p className="kicker">{site.descriptor}</p>
        </div>
        <div className="stack">
          <p>{site.sentence}</p>
          <p>
            Flat doesn&apos;t ask you to move into Flat. The filesystem is the
            ecosystem.
          </p>
          <p>
            Flat is a family of small, native tools built around files you
            already own. Notes stay Markdown. Tables stay CSV. Dictation stays
            on your device. Your folders remain folders. No proprietary
            formats, unnecessary accounts, silent conversions, or cloud
            dependencies. The app helps. The file remains yours.
          </p>
          <p className="fine">
            If you need a neighborhood, we sit near people who keep work on
            disk. The point is flatter: collapse the abstraction stack so there
            is no invisible ontology underneath.
          </p>
        </div>
        <div className="cta-row">
          <Link className="cta" href="/flatnote">
            See the apps
          </Link>
          <Link className="cta cta-ghost" href="/flat-out">
            Read Flat Out
          </Link>
        </div>
      </section>

      <section className="section rise rise-3">
        <div className="section-head">
          <h2>Three apps</h2>
          <p className="kicker">Trio tiles · one family</p>
        </div>
        <div className="app-grid">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} accent={index === 1} />
          ))}
        </div>
      </section>

      <section className="band" aria-label="Lines we keep">
        <div className="band-inner">
          <p className="kicker" style={{ color: "#C4BDB2" }}>
            Voice
          </p>
          <ul className="keep-list">
            {keepLines.map((line, index) => (
              <li key={line}>
                <span className="keep-mark">0{index + 1}</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Six Flat laws</h2>
          <p className="kicker">Concise · not a manifesto dump</p>
        </div>
        <Laws />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Flat Out</h2>
          <p className="kicker">Notes on software that stays out of the way</p>
        </div>
        <p className="section-copy">
          Editorial, not a changelog. Short pieces on accounts, export
          buttons, silent correction, folders, and who gets to be the source
          of truth.
        </p>
        <ul className="essay-index" style={{ marginTop: "1rem" }}>
          {essays.slice(0, 3).map((essay) => (
            <li key={essay.slug}>
              <Link className="essay-link" href={`/flat-out/${essay.slug}`}>
                <p className="essay-meta">
                  SHEET {essay.sheet} · {essay.date}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.2rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {essay.title}
                </h3>
                <p className="essay-dek">{essay.dek}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="cta-row">
          <Link className="cta cta-ghost" href="/flat-out">
            All Flat Out pieces
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
