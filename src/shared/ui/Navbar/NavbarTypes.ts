import type { SortMethod } from "@features/sort-idea";

export type NavbarProps = {
  onClick: () => void;
  onSortChange: (method: SortMethod) => void;
};
