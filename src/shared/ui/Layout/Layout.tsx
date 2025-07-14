import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4"></main>
      <Footer />
    </div>
  );
}
