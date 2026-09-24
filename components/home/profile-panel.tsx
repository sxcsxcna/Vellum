import Image from "next/image";
import { navItems } from "@/lib/site";
import { NavButton } from "@/components/home/nav-button";
import { SocialLinks } from "@/components/home/social-links";

export function ProfilePanel() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center border-b pb-4 lg:flex-1 lg:border-r lg:border-b-0 lg:pb-0">
      <Image
        src="/images/My.webp"
        alt="某星"
        width={150}
        height={150}
        preload
        sizes="(max-width: 640px) 96px, 150px"
        className="size-24 rounded-full sm:size-37.5"
      />
      <div className="mt-5 flex w-full flex-col items-center lg:my-8">
        {navItems.map((item) => (
          <NavButton
            key={item.label}
            href={"href" in item ? item.href : undefined}
          >
            {item.label}
          </NavButton>
        ))}
        <SocialLinks />
      </div>
    </div>
  );
}
