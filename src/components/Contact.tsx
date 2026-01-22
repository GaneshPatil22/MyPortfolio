import { useState } from "react";
import emailjs from "emailjs-com";
import { HiMail, HiUser, HiPaperAirplane, HiCheckCircle, HiExclamationCircle, HiSparkles, HiChat } from "react-icons/hi";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-full mb-6">
          <HiChat className="text-primary-500" />
          <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
            Let's Connect
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-slate-800 dark:text-white">Get In </span>
          <span className="gradient-text-animated">Touch</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Have a question or want to work together? Drop me a message!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Left side - Info cards */}
        <div className="md:col-span-2 space-y-6">
          {/* Email Card */}
          <div className="group card-glass p-6 glow-box">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <HiMail className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Email Me</h3>
                <a
                  href="mailto:ganeshp1206@gmail.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  ganeshp1206@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick response card */}
          <div className="group card-glass p-6 glow-box">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <HiSparkles className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Quick Response</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Availability badge */}
          <div className="card-glass p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-600 dark:text-green-400 font-medium">Available for new projects</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Currently open to freelance opportunities and full-time positions.
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="md:col-span-3">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl" />

            <div className="relative card-glass p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <HiCheckCircle className="text-white text-4xl" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl animate-shake">
                      <HiExclamationCircle size={24} />
                      <span className="font-medium">{error}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                      <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-primary-500' : 'text-slate-400'}`}>
                        <HiUser size={20} />
                      </span>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 pl-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-300"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl blur-xl" />
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                      <span className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary-500' : 'text-slate-400'}`}>
                        <HiMail size={20} />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 pl-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-300"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl blur-xl" />
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project or just say hi..."
                        rows={5}
                        className="w-full px-5 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                      />
                      {focusedField === 'message' && (
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl blur-xl" />
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative w-full overflow-hidden rounded-xl py-4 px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-gradient-x" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <span className="relative flex items-center justify-center gap-2">
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
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane className="rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
