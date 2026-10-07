import { PageShell } from "@/components/PageShell";
import { TitleBlock } from "@/components/TitleBlock";
import { essays, getEssay, getEssaySlugs } from "@/lib/essays";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type EssayPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) {
    return { title: "Flat Out" };
  }
  return {
    title: essay.title,
    description: essay.dek,
    alternates: { canonical: `/flat-out/${essay.slug}` },
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) {
    notFound();
  }

  const index = essays.findIndex((item) => item.slug === essay.slug);
  const previous = index > 0 ? essays[index - 1] : undefined;
  const next = index < essays.length - 1 ? essays[index + 1] : undefined;

  return (
    <PageShell currentPath="/flat-out">
      <TitleBlock
        sheet={essay.sheet}
        path={`flatapp.is/flat-out/${essay.slug}`}
        subject="Flat Out · editorial"
      />

      <article className="rise">
        <p className="essay-meta">
          {essay.date} · SHEET {essay.sheet}
        </p>
        <h1 className="essay-title">{essay.title}</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          {essay.dek}
        </p>
        <div className="rule-cyan" aria-hidden="true" />
        <div className="essay-body">
          {essay.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <nav className="section" aria-label="More Flat Out">
        <p className="kicker">Continue</p>
        <ul className="cross-links">
          <li>
            <Link href="/flat-out">/flat-out</Link>
          </li>
          {previous ? (
            <li>
              <Link href={`/flat-out/${previous.slug}`}>
                prev · {previous.title}
              </Link>
            </li>
          ) : null}
          {next ? (
            <li>
              <Link href={`/flat-out/${next.slug}`}>next · {next.title}</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </PageShell>
  );
}
