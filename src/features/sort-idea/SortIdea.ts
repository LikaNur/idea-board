import type { Idea } from "@entities/index";
import type { SortMethod } from "./SortIdeaTypes";

export const sortIdeas = (ideas: Idea[], method: SortMethod): Idea[] => {
  const sorted = [...ideas];

  switch (method) {
    case "title-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "createdAt-asc":
      sorted.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "createdAt-desc":
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    default:
      throw new Error(`Unknown sort method: ${method}`);
  }
  return sorted;
};

export default sortIdeas;