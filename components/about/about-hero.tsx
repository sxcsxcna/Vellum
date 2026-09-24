import Image from "next/image";
import { aboutContent } from "@/lib/site";

export function AboutHero() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center bg-[#fff6f3] bg-[url('/images/bg-shiratama.avif')] bg-cover bg-bottom bg-no-repeat px-6 py-16 sm:px-12 sm:py-24">
        <Image
          src="/images/bg1.webp"
          alt=""
          width={1950}
          height={1482}
          preload
          sizes="100vw"
          className="h-auto w-full object-contain"
        />

        <div className="mt-10 flex w-full flex-row items-center justify-center gap-6 sm:mt-14 sm:gap-14">
          <Image
            src="/images/My.webp"
            alt={aboutContent.name}
            width={400}
            height={400}
            sizes="(max-width: 640px) 144px, (max-width: 1024px) 288px, 420px"
            className="size-36 shrink-0 rounded-full sm:size-72 lg:size-105"
          />
          <div className="min-w-0 text-left">
            <h1 className="mb-2 text-3xl text-ink sm:mb-4 sm:text-5xl">
              {aboutContent.name}
            </h1>
            {aboutContent.roles.map((role) => (
              <h2 key={role} className="text-sm text-heading sm:text-lg">
                {role}
              </h2>
            ))}
            <h3 className="mt-2 text-base text-ink sm:mt-2.5 sm:text-2xl">
              {aboutContent.linksLabel}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
