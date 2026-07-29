import { SectionIcon } from "./SectionIcon";

type InfoCardProps = {
  id: string;
  title: string;
  description: string;
  items?: string[];
  headingLevel?: "h2" | "h3";
};

export function InfoCard({
  id,
  title,
  description,
  items = [],
  headingLevel = "h3",
}: InfoCardProps) {
  const Heading = headingLevel;

  return (
    <article className="info-card">
      <div className="info-card-icon" aria-hidden="true">
        <SectionIcon id={id} className="h-7 w-7" />
      </div>

      <div className="min-w-0 flex-1">
        <Heading className="info-card-title">{title}</Heading>
        <p className="info-card-body">{description}</p>

        {items.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item} className="info-tag">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
