import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import Blogs from "./components/Blogs";
// import BlogDetail from "./components/BlogDetail";
// import AddBlog from "./components/AddBlog";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/add" element={<AddBlog />} /> */}
        </Routes>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
