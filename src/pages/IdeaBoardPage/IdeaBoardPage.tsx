import type { Idea } from "@entities/index";
import type { SortMethod } from "@features/sort-idea";
import { IdeaBoard } from "@widgets/IdeaBoard";

export const IdeaBoardPage = ({
  sortMethod,
  ideas,
  onEdit,
  onDelete,
}: {
  sortMethod: SortMethod;
  ideas: Idea[];
  onEdit: (id: string, updated: { title: string; description: string }) => void;
  onDelete: (id: string) => void;
}) => {
  return (
    <>
      <IdeaBoard
        sortMethod={sortMethod}
        ideas={ideas}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
};

export default IdeaBoardPage;
