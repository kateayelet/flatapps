type Artifact = {
  name: string;
  note: string;
};

type ArtifactListProps = {
  items: readonly Artifact[];
};

export function ArtifactList({ items }: ArtifactListProps) {
  return (
    <ul className="artifacts">
      {items.map((item) => (
        <li key={item.name} className="artifact">
          <code>{item.name}</code>
          <span>{item.note}</span>
        </li>
      ))}
    </ul>
  );
}
