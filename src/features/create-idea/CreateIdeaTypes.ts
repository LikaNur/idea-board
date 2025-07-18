import type { Idea } from "@entities/index";

export type CreateIdeaProps = {
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  onAddIdea: (idea: Idea) => void;
};
