import { laws } from "@/lib/site";

export function Laws() {
  return (
    <ol className="laws">
      {laws.map((law) => (
        <li key={law.n} className="law">
          <p className="law-n">{law.n}</p>
          <h3 className="law-title">{law.title}</h3>
          <p className="law-body">{law.body}</p>
        </li>
      ))}
    </ol>
  );
}
