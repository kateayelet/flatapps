export type AppId = "flatnote" | "flatfile" | "flatvoice";

export type FlatApp = {
  id: AppId;
  name: string;
  href: `/${string}`;
  sheet: string;
  extension: string;
  artifact: string;
  lead: string;
  line: string;
  summary: string;
};

export const apps: readonly FlatApp[] = [
  {
    id: "flatnote",
    name: "FlatNote",
    href: "/flatnote",
    sheet: "01",
    extension: ".md",
    artifact: "notes/*.md",
    lead: "Your notes are just files.",
    line: "Your notes are files. As they should be.",
    summary: "Markdown on disk. The UI may prettify. The source does not silently change.",
  },
  {
    id: "flatfile",
    name: "FlatFile",
    href: "/flatfile",
    sheet: "02",
    extension: ".csv",
    artifact: "table.csv",
    lead: "The file is the truth. The app is just a window into it.",
    line: "FlatFile never guesses.",
    summary: "No database. No linking layer. The filesystem is the index. The grid is the CSV.",
  },
  {
    id: "flatvoice",
    name: "Flat Voice",
    href: "/flatvoice",
    sheet: "03",
    extension: ".txt",
    artifact: "vocab.txt",
    lead: "Speech processed locally.",
    line: "Nothing essential lives on a server you don't run.",
    summary: "vocab.txt, corrections.tsv, history.tsv, config.json. On the device. In the folder.",
  },
] as const;

export function getApp(id: AppId): FlatApp {
  const app = apps.find((item) => item.id === id);
  if (!app) {
    throw new Error(`Unknown app: ${id}`);
  }
  return app;
}
