import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
