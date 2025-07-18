import type { SocialIconLinkProps } from "./SocialIconLinkTypes";

export const SocialIconLink = ({ href, label, icon }: SocialIconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener
        noreferrer"
      aria-label={label}
      title={label}
      className="hover:text-gray-300 transition !pointer"
    >
      {icon}
    </a>
  );
};
