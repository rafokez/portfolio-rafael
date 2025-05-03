// src/pages/articles/IntegracaoAPIs.tsx
import integracaoapi from '../../assets/integracao-apis.png';

export default function IntegracaoAPIs() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-20 md:px-40">
      <div className="max-w-4xl mx-auto">
        {/* Data e tempo de leitura */}
        <div className="text-sm text-gray-400 mb-2">
          15 Março 2025 &nbsp;&nbsp;&bull;&nbsp;&nbsp; 6 min de leitura
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#43f8b6] mb-6">
          Como usei integrações de API para turbinar meus projetos
        </h1>

        {/* Imagem ou ilustração (você insere depois) */}
        <div className="w-full h-84 bg-[#1b1b1b] rounded-lg mb-10 flex items-center justify-center">
          <img src={integracaoapi} alt="" />
        </div>

        {/* Conteúdo */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Uma das formas mais eficientes de dar vida a um projeto é conectá-lo com dados reais. Foi assim que percebi o poder das APIs (Interfaces de Programação de Aplicativos): elas conectam a ideia ao mundo real.
          </p>

          <p>
            No projeto <strong>Rota Express</strong>, por exemplo, eu queria que o usuário pudesse buscar voos em tempo real. Qual seria a melhor forma? Integrar a API da <strong>Amadeus</strong>, um dos maiores provedores de dados de passagens aéreas. Com ela, o app deixa de ser apenas estático e passa a funcionar com dados vivos.
          </p>

          <p>
            Em outro projeto, o <strong>Read & Relax</strong>, eu queria montar um catálogo de livros com nome, sinopse e preço. Foi quando decidi usar a <strong>Google Books API</strong>. A cada busca do usuário, a aplicação retorna resultados diretamente da base de dados da Google.
          </p>

          {/* Espaço para imagem ilustrando o fluxo da API */}
          <div className="w-full h-60 bg-[#1b1b1b] rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[ Fluxo ou exemplo visual de API em uso ]</p>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-10">O impacto na experiência do usuário</h2>

          <p>
            Um dos maiores ganhos ao integrar APIs é a melhoria instantânea na experiência. O usuário sente que está interagindo com algo conectado com o "agora". Dados dinâmicos fazem diferença.
          </p>

          <p>
            Em termos de código, muitas dessas APIs trabalham com requisições REST usando `fetch` ou `axios`. A complexidade está mais na modelagem do dado recebido e no tratamento de erros do que no consumo em si.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Aprendizados práticos</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Documentação é tudo. Leia com atenção cada método da API.</li>
            <li>Cache pode ser um aliado para evitar limites de requisições.</li>
            <li>Simule erros! Veja como seu app se comporta sem resposta.</li>
            <li>Use variáveis de ambiente para esconder chaves de acesso.</li>
          </ul>

          {/* Espaço para print do app com API integrada */}
          <div className="w-full h-60 bg-[#1b1b1b] rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[ Print do app com resposta da API ]</p>
          </div>

          <p>
            Integrar APIs é abrir portas para dados que você não precisa construir do zero. Mas não basta plugar: é preciso saber extrair, tratar, apresentar e, claro, lidar com falhas. Isso separa projetos escolares de projetos reais.
          </p>

          <p>
            Continuo explorando outras APIs em projetos futuros. Quanto mais conectada for a aplicação, mais valor ela entrega. E isso, no fim, é o que importa.
          </p>
        </div>
      </div>
    </div>
  );
}