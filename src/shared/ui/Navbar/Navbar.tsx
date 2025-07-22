import { AddIcon, IdeaLogo, SortIcon } from "@shared/icons";
import { useState } from "react";
import { Button } from "../elements/Button/Button";
import type { SortMethod } from "@features/sort-idea";

type Props = {
  onClick: () => void;
  onSortChange: (method: SortMethod) => void;
};

export function Navbar({ onClick, onSortChange }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex relative z-50 items-stretch justify-between bg-white/10 backdrop-blur-sm backdrop-opacity-0 h-[90px] text-white px-3 md:px-48">
      <a href="/idea-board" className="flex items-center pointer">
        <IdeaLogo className="w-6 h-6 md:w-8 md:h-8" />
        <h1 className="text-md font-bold tracking-wider md:text-xl">
          IdeaBoard
        </h1>
      </a>
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          aria-label="Create idea"
          onClick={() => {
            setShowDropdown(false);
            onClick();
          }}
          variant="outline"
        >
          <AddIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden sm:inline text-sm">New Idea</span>
        </Button>
        <Button
          type="button"
          aria-label="Sort ideas"
          variant="outline"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <SortIcon className="w-5 h-5 md:w-5 md:h-6" />
          <span className="hidden sm:inline text-sm md:pl-1">Sort</span>
        </Button>

        {showDropdown && (
          <ul className="absolute top-[70px] mr-3 md:mx-0 md:right-28 bg-white text-black shadow-md rounded-md text-xs md:text-sm min-w-6 md:min-w-[120px]">
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
