// src/components/Blog.tsx
import React from 'react';

const articles = [
  {
    date: '30 Abril 2025',
    title: 'Como escolhi minhas stacks de desenvolvimento',
    excerpt: 'Neste artigo compartilho minha experiência escolhendo stacks modernas como Node.js, Java, Kotlin e Flutter para meus projetos pessoais e profissionais.',
    link: 'artigos/escolha-das-stacks',
  },
  {
    date: '15 Março 2025',
    title: 'Como usamos APIs para turbinar funcionalidades',
    excerpt: 'Uma análise de como integrei APIs como a Amadeus, Google Books e outras para gerar funcionalidades reais em apps como Rota Express e Read & Relax.',
    link: 'artigos/integracao-apis',
  },
  // Adicione mais artigos aqui...
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-20 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#43f8b6] mb-2">/artigos</h1>
        <p className="text-center text-gray-400 mb-10">Textos, ideias e reflexões que escrevi sobre minha jornada como dev.</p>

        <div className="space-y-10">
          {articles.map((article, index) => (
            <div key={index} className="border-b border-gray-700 pb-6">
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <h2 className="text-2xl font-semibold text-white mb-2">{article.title}</h2>
              <p className="text-gray-300 mb-3">{article.excerpt}</p>
              <a
                href={article.link}
                className="text-[#43f8b6] hover:underline text-sm"
              >
                Ler artigo completo ➝
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
