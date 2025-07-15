import { AddIcon, IdeaLogo, SortIcon } from "@shared/icons";

export default function Navbar({ onClick }: { onClick: () => void }) {
  return (
    <nav className="flex items-stretch justify-between bg-white/10 backdrop-blur-sm backdrop-opacity-0 h-[90px] text-white px-3 md:px-48">
      <a href="/" className="flex items-center pointer">
        <IdeaLogo className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-md font-bold tracking-wider md:text-xl">
          IdeaBoard
        </h1>
      </a>
      <div className="flex items-center gap-4">
        <button
          aria-label="Create idea"
          className="flex items-center m:pl-1 md:pr-3 m:py-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base"
          onClick={onClick}
        >
          <AddIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden sm:inline text-sm">New Idea</span>
        </button>

        <button
          aria-label="Sort idea"
          className="flex items-center gap-1 md:pl-2 md:pr-3 md:py-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base"
        >
          <SortIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden sm:inline text-sm">Sort</span>
        </button>
      </div>
    </nav>
  );
}
