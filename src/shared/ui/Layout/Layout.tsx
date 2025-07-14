import { useState } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { CreateIdeaModal } from "@features/create-idea";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onClick={() => setIsModalOpen(true)}/>
      <main className="flex-1 p-4">
        {isModalOpen && <CreateIdeaModal onClose={() => setIsModalOpen(false)} />}
      </main>
      <Footer />
    </div>
  );
}
