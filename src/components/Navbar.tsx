import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full px-6 md:px-20 py-6 flex justify-between items-center text-white bg-[#111]">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">R</div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-8 items-center font-poppins">

        {/* Links com efeito de underline suave no hover */}
        {["Home", "Sobre", "Serviços", "Portfolio", "Contato"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="relative transition duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#43f8b6] hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </a>
        ))}

        {/* Botão com hover de preenchimento igual ao "Me Contrate" */}
        <a
          href="#cases"
          className="group relative inline-block font-semibold text-[#111] bg-[#43f8b6] px-5 py-2 overflow-hidden rounded-full z-0 transition-all duration-300"
        >
          <span className="absolute left-0 top-0 h-full w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full z-[-1]"></span>
          <span className="relative z-10 group-hover:text-[#43f8b6]">Me contrate!</span>
        </a>
      </nav>
    </header>
  );
}
