import { useState } from "react";
import emailjs from "emailjs-com";
import { HiMail, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

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
        { from_name: name, from_email: email, message },
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
    <div className="px-6 py-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subtext">
          Have a question or want to work together? Drop me a message.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        {/* Info */}
        <div className="md:col-span-2 space-y-5">
          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-50 dark:bg-primary-500/10 rounded-lg flex items-center justify-center shrink-0">
                <HiMail className="text-primary-600 dark:text-primary-400 text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                <a
                  href="mailto:ganeshpatil0422@gmail.com"
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  ganeshpatil0422@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">Available for new projects</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Open to freelance opportunities and full-time positions. I typically respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <div className="p-6 md:p-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            {status === "success" ? (
              <div className="text-center py-10">
                <HiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                    <HiExclamationCircle size={18} />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="rotate-90" size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
