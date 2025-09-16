import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fm from "front-matter";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadBlog = async () => {
      // Import all .md files as raw
      const files = import.meta.glob("../blogs/*.md", {
        query: "?raw",
        import: "default",
      });

      // Match the file based on id
      const path = `../blogs/${id}.md`;

      if (files[path]) {
        const raw = await files[path]();
        const { attributes, body } = fm(raw as string);
        const attrs = attributes as { title?: string };
        setTitle(attrs.title ?? "");
        setContent(body);
      }
    };

    loadBlog();
  }, [id]);

  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
