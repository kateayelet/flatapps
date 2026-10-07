import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import { getApp } from "@/lib/apps";
import type { Metadata } from "next";
import Link from "next/link";

const app = getApp("flatvoice");

export const metadata: Metadata = {
  title: `${app.name} Privacy Policy`,
  description:
    "Flat Voice collects nothing. Speech is turned into text on your device. No account, no ads, no tracking, no analytics.",
  alternates: { canonical: `${app.href}/privacy` },
};

export default function FlatVoicePrivacyPage() {
  return (
    <PageShell currentPath={app.href}>
      <TitleBlock
        sheet={app.sheet}
        path={`flatapp.is${app.href}/privacy`}
        subject={`${app.name} · privacy policy`}
      />

      <section className="hero rise">
        <p className="kicker">Last updated: October 7, 2026</p>
        <h1 className="page-lead">Flat Voice collects nothing.</h1>
        <div className="rule-cyan" aria-hidden="true" />
        <p className="lede">
          No account. No ads. No tracking. No analytics. Your voice is not
          uploaded.
        </p>
      </section>

      <section className="section stack">
        <h2>What we collect</h2>
        <p>
          Nothing. This policy covers FlatVoice for iPhone, including the
          FlatVoice keyboard. It does not collect, transmit, or sell personal
          data. There is no account, no
          analytics, no advertising, and no tracking. We run no server that
          receives your audio or your words.
        </p>

        <h2>Your voice</h2>
        <p>
          Flat Voice records only while you dictate. The recording is turned
          into text on your device by a speech model stored on your device.
          The audio is not uploaded, and the temporary recording is deleted
          after it is transcribed.
        </p>

        <h2>Your words and files</h2>
        <p>
          Your transcripts, vocabulary, and corrections are plain files on
          your device (for example <code>history.tsv</code>,{" "}
          <code>vocab.txt</code>, and <code>corrections.tsv</code>). They stay
          there until you delete them or remove the app.
        </p>

        <h2>The keyboard and Full Access</h2>
        <p>
          On iPhone, the FlatVoice keyboard asks for Full Access so it can
          open the FlatVoice app to record and read back the finished text
          through a shared folder on your phone. The keyboard does not send
          what you type or say anywhere.
        </p>

        <h2>Network use</h2>
        <p>
          The only network request is the one-time speech model download you
          start in the app. The model comes from Hugging Face, which hosts the
          open WhisperKit models. Like any download, that request includes
          your IP address; Flat Voice sends nothing else, and nothing about
          you or your dictation.
        </p>

        <h2>Children</h2>
        <p>Flat Voice does not collect data from anyone, including children.</p>

        <h2>Changes</h2>
        <p>
          If this policy changes, the new version will be posted here with a
          new date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href="mailto:kateayelet@aftrveil.com">kateayelet@aftrveil.com</a>.
        </p>
      </section>

      <nav className="section" aria-label="Back to Flat Voice">
        <ul className="cross-links">
          <li>
            <Link href="/flatvoice">/flatvoice</Link>
          </li>
        </ul>
      </nav>
    </PageShell>
  );
}
