import { AddIcon, IdeaLogo, SortIcon } from "@shared/icons";

export default function Navbar() {
  return (
    <nav className="flex items-stretch justify-between bg-white/10 backdrop-blur-sm backdrop-opacity-0 h-20 text-white px-4 rounded-b-xl">
      <a href="/" className="flex items-center gap-2 pointer">
        <IdeaLogo className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-md font-bold tracking-wider md:text-xl">
          IdeaBoard
        </h1>
      </a>
      <div className="flex items-center gap-4">
        <button
          aria-label="Create idea"
          className="flex items-center gap-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base"
        >
          <span className="hidden sm:inline">New Idea</span>
          <AddIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          aria-label="Sort idea"
          className="flex items-center gap-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base"
        >
          <span className="hidden sm:inline ">Sort</span>
          <SortIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </nav>
  );
}
