import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo fokes.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", to: "/trabalhos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="w-full px-6 md:px-20 py-6 flex justify-between items-center text-white bg-[#111] relative z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <img src={logo} alt="" width={50}/>
      </div>

      {/* Botão hamburguer - mobile only */}
      <button
        className="md:hidden text-[#43f8b6] text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      {/* Menu - desktop */}
      <nav className="hidden md:flex space-x-8 items-center font-poppins">
        {navLinks.map((item, index) =>
          item.to ? (
            <Link
              key={index}
              to={item.to}
              className="relative transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#43f8b6] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={index}
              href={item.href}
              className="relative transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#43f8b6] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          )
        )}

        {/* Botão de contato */}
        <a
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block font-semibold text-[#111] bg-[#43f8b6] px-5 py-2 overflow-hidden rounded-full z-0 transition-all duration-300"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full z-[-1]"></span>
          <span className="relative z-10 group-hover:text-[#43f8b6]">Me contate!</span>
        </a>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111] flex flex-col items-center py-4 space-y-4 font-poppins md:hidden z-40">
          {navLinks.map((item, index) =>
            item.to ? (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#43f8b6] text-lg"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#43f8b6] text-lg"
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#43f8b6] border border-[#43f8b6] px-4 py-2 rounded-full text-sm hover:bg-[#43f8b6] hover:text-black transition"
          >
            Me contate!
          </a>
        </div>
      )}
    </header>
  );
}