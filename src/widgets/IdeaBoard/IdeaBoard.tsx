import { IdeaCard } from "@features/get-idea";
import { sortIdeas } from "@features/sort-idea";
import type { IdeaBoardProps } from "./IdeaBoardTypes";

export const IdeaBoard = ({
  sortMethod,
  ideas,
  onEdit,
  onDelete,
}: IdeaBoardProps) => {
  const sortedIdeas = sortIdeas(ideas, sortMethod);

  return (
    <div className="max-w-full md:mt-24 px-10 md:px-40 lg:px-52">
      {ideas.length === 0 ? (
        <div className="text-center md:mt-52">
          <h2 className="text-xl md:text-3xl font-bold mt-32">
            The journey of a thousand ideas begins with the first...
          </h2>
          <p className="text-md text-gray-300 md:text-xl mt-10">
            Click “New Idea” to begin ↗️
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {sortedIdeas.map((idea) => (
            <IdeaCard
              key={idea.id}
              id={idea.id}
              title={idea.title}
              description={idea.description}
              createdAt={new Date(idea.createdAt)}
              updatedAt={new Date(idea.updatedAt)}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeaBoard;
