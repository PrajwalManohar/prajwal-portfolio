import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md border-b border-blue-100 shadow">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <a href="#home" className="font-mono text-xl font-bold text-blue-900">
            prajwal <span className="text-blue-500">manohar</span>
          </a>

          {/* Hamburger menu (mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-800 hover:text-blue-900 transition-colors">
              Home
            </a>
            <a href="#about" className="text-blue-800 hover:text-blue-900 transition-colors">
              About
            </a>
             <a href="#experience" className="text-blue-800 hover:text-blue-900 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-blue-800 hover:text-blue-900 transition-colors">
              Projects
            </a>
            
            <a href="#publication" className="text-blue-800 hover:text-blue-900 transition-colors">
             Publication
            </a>
            
           
            <a href="#contact" className="text-blue-800 hover:text-blue-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
