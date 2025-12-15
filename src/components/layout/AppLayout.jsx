import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors">
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
