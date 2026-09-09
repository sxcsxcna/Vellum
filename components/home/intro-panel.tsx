import { homeIntro, site, type TextPart } from "@/lib/site";

function RichText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <b key={index}>{part.bold}</b>
        ),
      )}
    </>
  );
}

export function IntroPanel() {
  return (
    <div className="flex-2 overflow-y-auto px-5 py-3">
      <h1 className="text-4xl font-bold text-ink">{homeIntro.heading}</h1>
      <p className="mt-1 text-sm text-ink">{homeIntro.greeting}</p>

      {homeIntro.sections.map((section) => {
        const Heading = section.level;
        const headingClass =
          section.level === "h2"
            ? "mt-5 text-2xl font-bold text-heading"
            : "mt-3 text-xl font-bold text-heading";

        return (
          <section key={section.title}>
            <Heading className={headingClass}>{section.title}</Heading>
            {section.paragraphs.map((parts, index) => (
              <p key={index} className="my-1 text-base text-muted">
                <RichText parts={parts} />
              </p>
            ))}
          </section>
        );
      })}

      <p className="m-15 text-center text-footer">{site.copyright}</p>
    </div>
  );
}
