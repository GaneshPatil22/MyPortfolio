import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
