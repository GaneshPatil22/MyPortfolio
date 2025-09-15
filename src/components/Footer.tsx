import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Ganesh Patil. All rights reserved.
        </p>

        {/* Social Links */}
        <SocialLinks theme="dark" />
      </div>
    </footer>
  );
}
