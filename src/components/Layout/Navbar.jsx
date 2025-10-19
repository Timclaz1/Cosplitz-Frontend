import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../../assets/logo.svg";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { title: "Home", to: "/" },
    { title: "How It Works", to: "/works" },
    { title: "Features", to: "/features" },
    { title: "Community", to: "/community" },
  ];

  const toggleMenu = () => setMenu((prev) => !prev);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Add background shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F7F5F9]/95 shadow-md backdrop-blur-sm" : "bg-[#F7F5F9]"
      }`}
    >
      {/* ===== Navbar Container ===== */}
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          aria-label="CoSplitz home"
          className="flex items-center flex-shrink-0"
        >
          <img
            src={NavbarLogo}
            alt="CoSplitz logo"
            className="h-8 md:h-10 w-auto select-none pointer-events-none"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-12 mx-8"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-700 hover:text-[#1f8225] transition-colors text-[16px] font-medium whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4 text-[16px]">
          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-lg border-2 border-green-600 bg-white text-green-600 hover:bg-green-50 transition-colors font-medium"
          >
            SIGN UP
          </Link>
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors font-medium"
          >
            LOG IN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label={menu ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          menu ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenu(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          menu ? "translate-x-0" : "translate-x-full"
        } w-[70vw] max-w-[360px] md:hidden rounded-l-2xl overflow-y-auto`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
          <button
            onClick={() => setMenu(false)}
            aria-label="Close menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="px-5 py-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMenu(false)}
                  className="block text-gray-800 hover:text-[#1f8225] transition-colors text-lg font-medium py-3 px-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="mt-6 flex flex-col gap-3 px-3">
            <Link
              to="/signup"
              onClick={() => setMenu(false)}
              className="w-full px-4 py-3 rounded-lg border-2 border-green-600 bg-white text-green-600 hover:bg-green-50 transition-colors font-medium text-center"
            >
              SIGN UP
            </Link>
            <Link
              to="/login"
              onClick={() => setMenu(false)}
              className="w-full px-4 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors font-medium text-center"
            >
              LOG IN
            </Link>
          </div>

          <div className="mt-8 px-3 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} CoSplitz</p>
          </div>
        </nav>
      </aside>
    </header>
  );
}
