import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        bg-white
        dark:bg-neutral-600
        transition-colors
      "
    >
      <Header />
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
