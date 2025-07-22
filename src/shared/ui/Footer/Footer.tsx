import { EmailLogo, GitHubLogo, LinkedInLogo } from "@shared/icons";
import { SocialIconLink } from "../elements";

export function Footer() {
  const socialLinks = [
    {
      href: "mailto:nurmatova.mlk@gmail.com",
      label: "email",
      icon: <EmailLogo />,
    },
    {
      href: "https://github.com/LikaNur/idea-board",
      label: "gitHub profile",
      icon: <GitHubLogo />,
    },
    {
      href: "https://www.linkedin.com/in/nurmatova-malika/",
      label: "linkedIn profile",
      icon: <LinkedInLogo />,
    },
  ];

  return (
    <footer className="flex items-center justify-center flex-col gap-4 py-8">
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <SocialIconLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>
      <span className="text-gray-400 text-xs text-center">
        © {new Date().getFullYear()} IdeaBoard. All rights reserved. Malika
        Nurmatova
      </span>
    </footer>
  );
}
