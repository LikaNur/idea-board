import { useEffect, useState } from "react";
import { getIdeas, type Idea } from "@entities/index";
import { IdeaCard } from "@features/get-idea";
import { useSnackbar } from "notistack";
import { sortIdeas, type SortMethod } from "@features/sort-idea";

export const IdeaBoard = ({ sortMethod }: { sortMethod: SortMethod }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const sortedIdeas = sortIdeas(ideas, sortMethod);

  useEffect(() => {
    const storedIdeas = getIdeas();
    setIdeas(storedIdeas);
  }, []);

  const handleDelete = (id: string) => {
    const updated = ideas.filter((idea) => idea.id !== id);
    setIdeas(updated);
    localStorage.setItem("ideas", JSON.stringify(updated));
    enqueueSnackbar("Idea deleted", { variant: "warning" });
  };

  const handleEdit = (
    id: string,
    updated: { title: string; description: string }
  ) => {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id
        ? {
            ...idea,
            ...updated,
            updatedAt: new Date(),
          }
        : idea
    );

    setIdeas(updatedIdeas);
    enqueueSnackbar("Idea updated successfully!", { variant: "success" });

    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
  };

  return (
    <div className="max-w-full md:mt-24 px-10 md:px-40 lg:px-52">
      {ideas.length === 0 ? (
        <div className="text-center md:mt-60">
          <h2 className="text-xl md:text-3xl font-bold mt-60">
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
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IdeaBoard;
