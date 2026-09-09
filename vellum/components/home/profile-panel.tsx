import Image from "next/image";
import { navItems } from "@/lib/site";
import { NavButton } from "@/components/home/nav-button";
import { SocialLinks } from "@/components/home/social-links";

export function ProfilePanel() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center border-r">
      <Image
        src="/images/My.png"
        alt="某星"
        width={150}
        height={150}
        priority
        className="rounded-full"
      />
      <div className="my-10 flex h-[55%] w-full flex-col items-center">
        {navItems.map((item) => (
          <NavButton key={item.label} href={"href" in item ? item.href : undefined}>
            {item.label}
          </NavButton>
        ))}
        <SocialLinks />
      </div>
    </div>
  );
}
