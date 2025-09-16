import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fm from "front-matter";

interface BlogMeta {
  id: string;
  title: string;
  image: string;
  description: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const files = import.meta.glob("../blogs/*.md", {
        query: "?raw",
        import: "default",
      });
      const loadedBlogs: BlogMeta[] = [];

      for (const path in files) {
        const raw = await files[path]();
        const { attributes } = fm<BlogMeta>(raw as string); // front-matter returns `attributes`
        const id = path.split("/").pop()?.replace(".md", "") || "";
        loadedBlogs.push({ ...attributes, id } as BlogMeta);
      }

      setBlogs(loadedBlogs);
    };

    loadBlogs();
  }, []);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>
    <div className="mt-12 text-center">
    <Link
        to="/blogs/add"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
    >
        ➕ Add Blog
    </Link>
    </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
