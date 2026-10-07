export type Essay = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  sheet: string;
  body: string[];
};

export const essays: readonly Essay[] = [
  {
    slug: "an-account-should-have-a-reason",
    title: "An account should have a reason to exist",
    dek: "If the only job of the login is to hold your files hostage, skip the login.",
    date: "2026-10-06",
    sheet: "A1",
    body: [
      "An account is a tool. It can bill you, sync a machine you don't have, or prove you are allowed to see something that is not yours. Those are reasons.",
      "A notes app does not need a reason like that. Neither does a grid over a CSV. If the work is a file on a disk you already own, the account is not a feature. It is a new owner.",
      "Flatapps does not offer a Flat account, because there is not anything an account would do for you. No workspace to join. No family graph to migrate into. The folder is already the shared surface.",
      "If a product cannot explain the account without saying “so we can save your stuff,” the stuff was never yours. It was a row in their ontology, wearing your filename as a costume.",
    ],
  },
  {
    slug: "no-export-button",
    title: "Your file should not need an export button",
    dek: "Export is a confession that the real copy lived somewhere else.",
    date: "2026-10-06",
    sheet: "A2",
    body: [
      "“You can export” is the polite version of “we kept the original.” The button appears when the app has become the source of truth and the file is a courtesy.",
      "The test is not whether export exists. The test is whether the work was trapped. If the canonical artifact is already Markdown, CSV, TXT, TSV, or JSON in a folder you chose, there is nothing to extract. You are already holding it.",
      "A good tool can close. The document remains a document. A bad tool leaves you with a proprietary blob and a promise that the converters will stay kind.",
      "If we disappear, your files don't. That is not a slogan about backups. It is a statement about where the work was allowed to live while we were still in the room.",
    ],
  },
  {
    slug: "do-not-silently-correct",
    title: "Software should not silently correct facts",
    dek: "00123 is a value. It is not a number that forgot a type.",
    date: "2026-10-06",
    sheet: "A3",
    body: [
      "Inference is a courtesy until it writes. Then it is an edit you did not make.",
      "Spreadsheets have trained people to expect this: identifiers become dates, leading zeros vanish, a column decides it knows better than the file. The grid looks helpful. The artifact is now wrong.",
      "FlatFile never guesses. Zero inference means 00123 stays 00123. A type is a display choice, or an explicit one. It is not a midnight rewrite of the CSV.",
      "The same law applies to notes. The UI may prettify. textContent === source. If the Markdown on disk changes, a person changed it — or the app has started owning the text.",
      "Don't infer without permission. The sentence is short because the failure mode is not subtle. Silent correction is how software becomes the author.",
    ],
  },
  {
    slug: "folders-are-underrated",
    title: "Folders are underrated",
    dek: "The filesystem is already a database, a namespace, and a sync story.",
    date: "2026-10-06",
    sheet: "A4",
    body: [
      "A folder is not a consolation prize for people who have not discovered the platform. It is a durable, boring, inspectable place for related files to sit.",
      "You can see it. You can copy it. You can zip it. You can put it on a USB stick or in the sync tool you already pay for. You do not need a new graph to say that these things belong together.",
      "Flat apps compose through artifacts, not platforms. Matching filenames in the same folder are a protocol. vocab.txt next to corrections.tsv next to history.tsv is more honest than a hidden index in a private database.",
      "People keep inventing workspaces because folders look old. Folders look old because they worked. The underrated part is that they do not require you to move in.",
    ],
  },
  {
    slug: "the-app-is-not-the-source-of-truth",
    title: "The app is not the source of truth",
    dek: "The file is the truth. The app is a tool. Keep those jobs separate.",
    date: "2026-10-06",
    sheet: "A5",
    body: [
      "Software likes to become the owner of the thing it helps you make. It starts as a window and ends as a venue. Your notes become “your Flat.” Your table becomes a base. Your voice becomes a cloud feature.",
      "Flatapps is a refusal of that promotion. FlatNote, FlatFile, and Flat Voice are small native tools around files you already own. Notes stay Markdown. Tables stay CSV. Dictation stays on the device. Folders remain folders.",
      "This is not a pitch for a suite that connects them in a Flat database. They compose if you put them in the same place. That is enough.",
      "Call it local-first if you need a neighborhood. The actual claim is flatter: collapse the abstraction stack so there is no invisible ontology underneath. The user's artifact is canonical. The app can go away. The work should not notice.",
    ],
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((essay) => essay.slug === slug);
}

export function getEssaySlugs(): string[] {
  return essays.map((essay) => essay.slug);
}
