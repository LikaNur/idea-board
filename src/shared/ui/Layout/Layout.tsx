import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { CreateIdeaModal } from "@features/create-idea";
import { IdeaBoardPage } from "pages/IdeaBoardPage";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onClick={() => setIsModalOpen(true)} />
      <main className="flex-1 p-4">
        <IdeaBoardPage />

        {isModalOpen && (
          <CreateIdeaModal
            onClose={() => setIsModalOpen(false)}
            modalRef={modalRef}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
