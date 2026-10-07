export const site = {
  name: "Flatapps",
  domain: "flatapp.is",
  url: "https://flatapp.is",
  sentence:
    "Flatapps is the home for FlatNote, FlatFile, and Flat Voice — one set of flat apps.",
  descriptor: "Small tools for files you own.",
  honest: "Honest software for ordinary files.",
  core: "The file is the truth.",
  tool: "The app is a tool.",
  center:
    "Software that refuses to become the owner of the thing it helps you make.",
} as const;

export const nav = [
  { href: "/flatnote", label: "FlatNote", path: "/flatnote" },
  { href: "/flatfile", label: "FlatFile", path: "/flatfile" },
  { href: "/flatvoice", label: "Flat Voice", path: "/flatvoice" },
  { href: "/flat-out", label: "Flat Out", path: "/flat-out" },
  { href: "/about", label: "About", path: "/about" },
] as const;

export const laws = [
  {
    n: "01",
    title: "The user's artifact is canonical.",
    body: "The file wins. The app may show, sort, or prettify. It does not become the original.",
  },
  {
    n: "02",
    title: "Use boring, durable formats.",
    body: "Markdown, CSV, TXT, TSV, JSON, folders. Formats you can open without us.",
  },
  {
    n: "03",
    title: "Don't infer without permission.",
    body: "00123 stays 00123. A leading zero is not a suggestion. Guessing is a feature request, not a default.",
  },
  {
    n: "04",
    title: "Don't require infrastructure you don't need.",
    body: "No account. There isn't anything an account would do for you.",
  },
  {
    n: "05",
    title: "Apps compose through artifacts, not platforms.",
    body: "Same folder. Matching filenames. The filesystem is the ecosystem.",
  },
  {
    n: "06",
    title: "If the app disappeared tomorrow, the work remains useful.",
    body: "Not “can I export?” — was it ever trapped?",
  },
] as const;

export const keepLines = [
  "No account. There isn't anything an account would do for you.",
  "Your notes are files. As they should be.",
  "FlatFile never guesses.",
  "If we disappear, your files don't.",
] as const;
