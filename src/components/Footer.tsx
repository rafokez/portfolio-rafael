
import { FaGithub, FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 py-10 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#43f8b6] mb-4">Contato</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#43f8b6]" /> raphael.k.business@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#43f8b6]" /> (13) 98834-2378
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-[#43f8b6]" />
              <a
                href="https://github.com/rafokez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#43f8b6] transition"
              >
                github.com/rafokez
              </a>
            </li>
          </ul>
        </div>

        {/* Baixar currículo */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400 mb-4">Baixe meu currículo</p>
          <a
            href="/curriculo.pdf" // coloque o PDF dentro da pasta public/
            download
            className="inline-flex items-center gap-2 bg-[#43f8b6] text-[#111] px-5 py-2 rounded-full font-semibold hover:bg-[#3edaa7] transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

      </div>

      <div className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} Rafael Almeida. Todos os direitos reservados.
      </div>
    </footer>
  );
}
