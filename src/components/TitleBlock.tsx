type TitleBlockProps = {
  sheet: string;
  path: string;
  subject: string;
  children?: React.ReactNode;
};

export function TitleBlock({
  sheet,
  path,
  subject,
  children,
}: TitleBlockProps) {
  return (
    <header className="title-block">
      <div className="title-meta">
        <p className="title-sheet">
          <span>SHEET</span> {sheet}
        </p>
        <p className="title-path">{path}</p>
        <p className="title-rev">REV A · 2026</p>
      </div>
      <p className="title-subject">{subject}</p>
      {children}
    </header>
  );
}
