import type { SortMethod } from "@features/sort-idea";
import { IdeaBoard } from "@widgets/IdeaBoard";

export const IdeaBoardPage = ({ sortMethod }: { sortMethod: SortMethod }) => {
  return (
    <>
      <IdeaBoard sortMethod={sortMethod} />
    </>
  );
};

export default IdeaBoardPage;
