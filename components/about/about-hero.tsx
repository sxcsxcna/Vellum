import { aboutContent } from "@/lib/site";

export function AboutHero() {
  return (
    <div className="flex w-full flex-col items-center">
      <img
        src="/images/bg1.webp"
        alt=""
        width={1950}
        height={1482}
        fetchPriority="high"
        className="h-auto w-full max-w-full object-cover"
      />
      <div className="m-4 flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 sm:m-5 sm:flex-row sm:flex-wrap sm:gap-0">
        <img
          src="/images/My.webp"
          alt={aboutContent.name}
          width={400}
          height={400}
          className="size-40 rounded-full sm:m-7.5 sm:size-[400px]"
        />
        <div className="w-full max-w-md text-center sm:ml-12 sm:h-auto sm:w-150 sm:text-left md:ml-25">
          <h1 className="mb-3 text-4xl text-ink sm:mt-12.5 sm:mb-5 sm:text-5xl">
            {aboutContent.name}
          </h1>
          {aboutContent.roles.map((role) => (
            <h2 key={role} className="text-base text-heading sm:text-lg">
              {role}
            </h2>
          ))}
          <h3 className="mt-2.5 text-xl text-ink sm:text-2xl">
            {aboutContent.linksLabel}
          </h3>
        </div>
      </div>
    </div>
  );
}
