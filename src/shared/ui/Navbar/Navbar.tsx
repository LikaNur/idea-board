import type { SortMethod } from "@features/sort-idea";
import { AddIcon, IdeaLogo, SortIcon } from "@shared/icons";
import { useState } from "react";

export default function Navbar({
  onClick,
  onSortChange,
}: {
  onClick: () => void;
  onSortChange: (method: SortMethod) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex relative z-50 items-stretch justify-between bg-white/10 backdrop-blur-sm backdrop-opacity-0 h-[90px] text-white px-3 md:px-48">
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
          onClick={() => {
            setShowDropdown(false);
            onClick();
          }}
        >
          <AddIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden sm:inline text-sm">New Idea</span>
        </button>

        <button
          aria-label="Sort idea"
          className="flex items-center gap-1 md:pl-2 md:pr-3 md:py-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base relative"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <SortIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden sm:inline text-sm">Sort</span>
        </button>

        {showDropdown && (
          <ul className="absolute top-[70px] mr-3 md:mx-0 md:right-32 bg-white text-black shadow-md rounded-md text-xs md:text-sm min-w-6 md:min-w-[120px]">
            <li
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer rounded-md"
              onClick={() => {
                onSortChange("title-asc");
                setShowDropdown(false);
              }}
            >
              Title A–Z
            </li>
            <li
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              onClick={() => {
                onSortChange("title-desc");
                setShowDropdown(false);
              }}
            >
              Title Z–A
            </li>
            <li
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              onClick={() => {
                onSortChange("createdAt-asc");
                setShowDropdown(false);
              }}
            >
              Created (Oldest)
            </li>
            <li
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer rounded-md"
              onClick={() => {
                onSortChange("createdAt-desc");
                setShowDropdown(false);
              }}
            >
              Created (Newest)
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
