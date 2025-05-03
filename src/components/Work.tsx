import React from 'react';

const projetos = [
  {
    nome: 'Ciclou App',
    link: 'https://play.google.com/store/apps/details?id=com.beyondsystem.ciclou_novo_app&hl=pt_BR',
    descricao: 'App que conecta pontos de coleta de óleo de cozinha com usuários — disponível na Play Store.',
  },
  {
    nome: 'VIA (CPTM)',
    link: 'https://github.com/rafokez/VIA-APP',
    descricao: 'App de rastreamento de trens e metrôs em tempo real, apresentado na estação Brás (CPTM).',
  },
  {
    nome: 'Rota Express',
    link: 'https://star-rotaexpress.com/',
    descricao: 'Sistema de busca de passagens aéreas via integração com a API da Amadeus.',
  },
  {
    nome: 'Instituto Amar',
    link: 'https://instituto-amar.vercel.app/',
    descricao: 'Site institucional criado para dar visibilidade ao projeto social Instituto Amar.',
  },
  {
    nome: 'Read & Relax',
    link: '#',
    descricao: 'Web app para consulta e organização de leituras via API do Google Books (em desenvolvimento).',
  },
  {
    nome: 'Landing Sabrina',
    link: 'https://www.sabrinacamara.art.br',
    descricao: 'Landing page feita para a artista visual Sabrina Camara, com foco em portfólio e contato.',
  },
];

export default function Trabalhos() {
  return (
    <main className="min-h-screen bg-[#111111] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#43f8b6]">/trabalhos</h1>
        <p className="text-gray-400 mb-12">Projetos que desenvolvi nos últimos tempos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projetos.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#43f8b6] rounded-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-6 flex flex-col items-center justify-between gap-4 text-center">
                <h3 className="text-lg font-semibold text-white">{proj.nome}</h3>
                <p className="text-sm text-gray-400">{proj.descricao}</p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block font-semibold text-[#111] bg-[#43f8b6] px-5 py-2 overflow-hidden rounded-full z-0 transition-all duration-300 mt-2"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full z-[-1]"></span>
                  <span className="relative z-10 group-hover:text-[#43f8b6]">
                    Acessar Projeto
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
