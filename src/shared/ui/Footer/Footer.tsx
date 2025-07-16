import { EmailLogo, GitHubLogo, LinkedInLogo } from "@shared/icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center flex-col gap-4 py-8">
      <div className="flex items-center gap-4">
        <a
          href="mailto:nurmatova.mlk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
          className="hover:text-gray-300 transition pointer"
        >
          <EmailLogo />
        </a>
        <a
          href="https://github.com/LikaNur/idea-board"
          target="blank"
          rel="noopener
        noreferrer"
          aria-label="github profile"
          className="hover:text-gray-300 transition pointer"
        >
          <LinkedInLogo />
        </a>
        <a
          href="https://www.linkedin.com/in/nurmatova-malika/"
          target="_blank"
          rel="noopener
        noreferrer"
          aria-label="linkedIn profile"
          className="hover:text-gray-300 transition pointer"
        >
          <GitHubLogo />
        </a>
      </div>
        <span className="text-gray-400 text-xs text-center">
          © {new Date().getFullYear()} IdeaBoard. All rights reserved. Malika
          Nurmatova
        </span>
    </footer>
  );
}
