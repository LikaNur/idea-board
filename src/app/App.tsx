import { useEffect, useRef, useState } from "react";
import { CreateIdeaModal } from "@features/create-idea";
import { sortIdeas, type SortMethod } from "@features/sort-idea";
import { getIdeas, type Idea } from "@entities/index";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { Footer, Navbar } from "@shared/ui";
import { IdeaCard } from "@features/get-idea";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState<SortMethod>("createdAt-desc");
  const [ideas, setIdeas] = useState<Idea[]>(getIdeas());
  const sortedIdeas = sortIdeas(ideas, sortMethod);

  const modalRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const handleAddIdea = (idea: Idea) => {
    const allIdeas = [idea, ...ideas];
    const sortedIdeas = sortIdeas(allIdeas, sortMethod);

    setIdeas(sortedIdeas);
  };

  const handleEditIdea = (
    id: string,
    updated: { title: string; description: string }
  ) => {
    const editIdea = (prevIdeas: Idea[]) =>
      prevIdeas.map((idea) =>
        idea.id === id
          ? {
              ...idea,
              ...updated,
              updatedAt: new Date(),
            }
          : idea
      );

    setIdeas(editIdea);
    enqueueSnackbar("Idea updated successfully!", { variant: "success" });
  };

  const handleDeleteIdea = (id: string) => {
    const deleteIdea = (prevIdeas: Idea[]) =>
      prevIdeas.filter((idea) => idea.id !== id);

    setIdeas(deleteIdea);
    enqueueSnackbar("Idea deleted", { variant: "error" });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={1000}
      preventDuplicate
      aria-live="assertive"
    >
      <div className="min-h-screen bg-idea-gradient">
        <div className="flex flex-col min-h-screen">
          <Navbar
            onClick={() => setIsModalOpen(true)}
            onSortChange={setSortMethod}
          />
          <main className="flex-1 p-4">
            <div className="max-w-full md:mt-24 mt-60 px-10 md:px-40 lg:px-52">
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
                      idea={{
                        ...idea,
                        createdAt: new Date(idea.createdAt),
                        updatedAt: new Date(idea.updatedAt),
                      }}
                      onEdit={handleEditIdea}
                      onDelete={handleDeleteIdea}
                    />
                  ))}
                </div>
              )}
            </div>
            {isModalOpen && (
              <CreateIdeaModal
                onClose={() => setIsModalOpen(false)}
                modalRef={modalRef}
                onAddIdea={handleAddIdea}
              />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </SnackbarProvider>
  );
}
