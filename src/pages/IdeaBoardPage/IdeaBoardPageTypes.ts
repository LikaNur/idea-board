import type { Idea } from "@entities/index";
import type { SortMethod } from "@features/sort-idea";

export type IdeaBoardPageProps = {
  sortMethod: SortMethod;
  ideas: Idea[];
  onEdit: (id: string, updated: { title: string; description: string }) => void;
  onDelete: (id: string) => void;
};
