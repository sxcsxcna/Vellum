import { socialLinks } from "@/lib/site";

const iconClassName =
  "mx-1.25 rounded-xl text-muted transition-all duration-300 ease-in-out hover:bg-icon-hover active:shadow-press";

export function SocialLinks() {
  return (
    <div className="flex h-[4em] w-full justify-center p-[2em]">
      {socialLinks.map((item) => (
        <svg
          key={item.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={item.viewBox}
          width="3em"
          height="3em"
          className={iconClassName}
          aria-label={item.label}
          role="img"
        >
          <path fill="currentColor" d={item.path} />
        </svg>
      ))}
    </div>
  );
}
