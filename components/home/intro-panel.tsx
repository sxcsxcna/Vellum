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
    <div className="flex-2 overflow-visible px-1 pt-5 pb-2 sm:overflow-y-auto sm:px-5 sm:py-3">
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">{homeIntro.heading}</h1>
      <p className="mt-1 text-sm text-ink">{homeIntro.greeting}</p>

      {homeIntro.sections.map((section) => {
        const Heading = section.level;
        const headingClass =
          section.level === "h2"
            ? "mt-4 text-xl font-bold text-heading sm:mt-5 sm:text-2xl"
            : "mt-3 text-lg font-bold text-heading sm:text-xl";

        return (
          <section key={section.title}>
            <Heading className={headingClass}>{section.title}</Heading>
            {section.paragraphs.map((parts, index) => (
              <p key={index} className="my-1 text-sm leading-relaxed text-muted sm:text-base">
                <RichText parts={parts} />
              </p>
            ))}
          </section>
        );
      })}

      <p className="mx-auto my-8 text-center text-xs text-footer sm:m-15 sm:text-sm">
        {site.copyright}
      </p>
    </div>
  );
}
