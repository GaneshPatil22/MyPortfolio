import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    alert("Message sent successfully! ✅");

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

      <form
        className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <label className="block mb-4">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </label>

        <label className="block mb-4">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </label>

        <label className="block mb-4">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={5}
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
