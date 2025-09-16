import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Normally you’d save to backend or write file
    // For now we’ll just log and redirect
    const newBlog = {
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      image,
      description,
      content,
    };

    console.log("New Blog:", newBlog);

    // TODO: save logic (localStorage, backend, or .md generation)
    // Redirect back to blogs
    navigate("/blogs");
  };

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">➕ Add New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Image URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Content (Markdown)</label>
          <textarea
            rows={8}
            className="w-full border p-2 rounded font-mono"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}
