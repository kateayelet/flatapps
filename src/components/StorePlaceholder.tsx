type StorePlaceholderProps = {
  appName: string;
};

export function StorePlaceholder({ appName }: StorePlaceholderProps) {
  return (
    <aside className="store-placeholder" aria-label={`${appName} download status`}>
      <p className="store-kicker">Mac App Store</p>
      <p className="store-path">app-store://pending</p>
      <p className="store-note">
        No live store URL yet. This is a placeholder — not a product link, and
        not a listing.
      </p>
    </aside>
  );
}
