import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        bg-blue-200/90 backdrop-blur-sm border-b border-blue-300 shadow-md
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-blue-950 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects","publication","experience", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-blue-900 my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
