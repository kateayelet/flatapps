import Link from "next/link";
import type { FlatApp } from "@/lib/apps";

type AppCardProps = {
  app: FlatApp;
  accent?: boolean;
};

export function AppCard({ app, accent = false }: AppCardProps) {
  return (
    <Link href={app.href} className={`app-card${accent ? " is-accent" : ""}`}>
      <p className="app-card-ext">{app.extension}</p>
      <h2 className="app-card-name">{app.name}</h2>
      <p className="app-card-line">{app.line}</p>
      <p className="app-card-artifact">{app.artifact}</p>
    </Link>
  );
}
