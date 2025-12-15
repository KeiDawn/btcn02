import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <main className="min-h-[80vh] p-4 mt-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
