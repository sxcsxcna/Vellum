import Image from "next/image";
import { aboutContent } from "@/lib/site";

export function AboutHero() {
  return (
    <div className="flex w-full flex-col items-center">
      <Image
        src="/images/bg1.webp"
        alt=""
        width={1950}
        height={1482}
        priority
        unoptimized
        className="h-auto w-full max-w-full object-cover"
      />
      <div className="m-5 flex flex-wrap items-center justify-center">
        <Image
          src="/images/My.webp"
          alt={aboutContent.name}
          width={400}
          height={400}
          unoptimized
          className="m-7.5 rounded-full"
        />
        <div className="ml-25 m-7.5 h-100 w-150">
          <h1 className="mt-12.5 mb-5 text-5xl text-ink">
            {aboutContent.name}
          </h1>
          {aboutContent.roles.map((role) => (
            <h2 key={role} className="text-heading">
              {role}
            </h2>
          ))}
          <h3 className="mt-2.5 text-2xl text-ink">
            {aboutContent.linksLabel}
          </h3>
        </div>
      </div>
    </div>
  );
}
