import { useState } from "react";
import emailjs from "emailjs-com";
import { HiMail, HiUser, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="section-heading">Get In Touch</h1>
        <p className="section-subheading">
          Have a question or want to work together? Drop me a message!
        </p>
      </div>

      <div className="card p-8 md:p-12 max-w-xl mx-auto border border-slate-100">
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <HiCheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
            <p className="text-slate-600">
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl">
                <HiExclamationCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <HiUser size={20} />
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="input-field pl-12"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <HiMail size={20} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="input-field pl-12"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <HiPaperAirplane className="rotate-90" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
