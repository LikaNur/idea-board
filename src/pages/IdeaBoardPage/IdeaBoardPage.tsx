import { IdeaBoard } from "@widgets/IdeaBoard";
import type { IdeaBoardPageProps } from "./IdeaBoardPageTypes";

export const IdeaBoardPage = ({
  sortMethod,
  ideas,
  onEdit,
  onDelete,
}: IdeaBoardPageProps) => {
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
