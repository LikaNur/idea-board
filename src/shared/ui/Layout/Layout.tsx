import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { CreateIdeaModal } from "@features/create-idea";
import { IdeaBoardPage } from "pages/IdeaBoardPage";
import type { SortMethod } from "@features/sort-idea";
import { getIdeas, type Idea } from "@entities/index";
import { enqueueSnackbar } from "notistack";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState<SortMethod>("createdAt-desc");
  const [ideas, setIdeas] = useState<Idea[]>(getIdeas());

  const modalRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const handleAddIdea = (idea: Idea) => {
    setIdeas((prevIdeas) => [idea, ...prevIdeas]);
  };

  const handleEditIdea = (
    id: string,
    updated: { title: string; description: string }
  ) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) => (idea.id === id ? { ...idea, ...updated } : idea))
    );
    enqueueSnackbar("Idea updated successfully!", { variant: "success" });
  };

  const handleDeleteIdea = (id: string) => {
    setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea.id !== id));
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
    <div className="flex flex-col min-h-screen">
      <Navbar
        onClick={() => setIsModalOpen(true)}
        onSortChange={setSortMethod}
      />
      <main className="flex-1 p-4">
        <IdeaBoardPage
          sortMethod={sortMethod}
          ideas={ideas}
          onEdit={handleEditIdea}
          onDelete={handleDeleteIdea}
        />

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
  );
}
