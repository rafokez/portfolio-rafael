// src/pages/articles/EscolhaDasStacks.tsx
import capastacks from '../../assets/escolha-de-stacks.png';
import fotohenrique from '../../assets/fotohenrique.jfif';

export default function EscolhaDasStacks() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-20 md:px-40">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm text-gray-400 mb-2">02 Abril 2025 &nbsp;&nbsp;&bull;&nbsp;&nbsp; 6 min de leitura</div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#43f8b6] mb-6">
          🧩 Por que escolhi as stacks que uso hoje
        </h1>

        <div className="w-full h-30 bg-[#1b1b1b] rounded-lg mb-20 flex items-center justify-center">
          <img src={capastacks} alt="Capa do Artigo" />
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Pegar uma stack pra programar é mais que hype ou momento. Pra mim, virou entender o que explode meus problemas do jeito mais esperto, gigante e prático possível.
          </p>

          <p>
            Comecei no modo zen: HTML, CSS e JavaScript. Mas com o tempo e uns trabalhos como o <strong>VIA</strong>, <strong>Ciclou App</strong> e <strong>Skyline</strong>, entendi o que brilhava no meu trabalho. Hoje, sei muito bem das stacks que estão comigo — e por que abracei cada uma delas.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">🚀 Ligando o que já bombava na época
          </h2>
          <p>
            No começo da saga dev, fui seguindo o flow normal: uns projetos em HTML, CSS e JS puro — até uns com jQuery e efeitos feitos à mão. Aprendi bem enquanto pesquisava sobre visual e ia bisbilhotando e testando no browser.
          </p>
          <p>
            Com o tempo, vi que faltava uma base. Foi quando o <strong>React</strong> chegou.
          </p>
          <p>
            Não foi só modinha — foi a ideia de peças que se repetem, o jeito que ele me fez ver a UI como pecinhas que encaixam. React me deu a moral de montar as ideias de uma maneira mais prática do que os métodos que usava antigamente.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">💫 A época de Ruby e uns games no terminal
          </h2>
          <p>
            Quase ninguém sabe, mas em 2024 eu mergulhei fundo no mundo Ruby. Fiz uns cursos pesados de <strong>Ruby</strong> e <strong>Ruby on Rails</strong>. Cheguei a desenvolver uns games no terminal, com <code>puts</code> e cores, e me divertia demais enquanto pensava em historinhas ou na ficha do meu personagem.
          </p>
          <p>
            Ruby tem uma fala elegante, quase poesia. Mas, mesmo amando, mudei quando vi algo que me capturou de uma vez.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">📱 Flutter: Onde me encontrei.
          </h2>
          <p>
            Conheci o <strong>Flutter</strong> sem querer, vendo uma palestra sensacional do Henrique Martins.
          </p>

          <div className="w-full bg-[#1b1b1b] rounded-lg flex flex-col items-center justify-center py-6 gap-4 mt-6 mb-4">
            <img
              src={fotohenrique}
              alt="Henrique Martins"
              className="w-40 h-40 object-cover rounded-md shadow-lg"
            />

            <a
              href="https://github.com/hmartiins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#43f8b6] flex items-center gap-2 hover:underline text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 010 5.656M10.172 13.828a4 4 0 015.656 0M15 12a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              O link do Henrique Martins no GitHub
            </a>
          </div>

          <p>
            Ali virou tudo. Me apaixonei pela moral: um código só pra Android, iOS e até web. O hot reload, o visual liso com o Material, e a chance de criar uns apps muito interessantes de maneira extremamente rápida... Eu gostei de cara.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">🌪️ O trabalho que virou tudo, basicamente: Ciclou App
          </h2>
          <p>
            O <strong>Ciclou App</strong> nasceu de uma demanda freelancer, mas sinceramente, foi mais que isso: foi meu primeiro app de verdade no ar.
            Com ele, não só me aprofundei no Flutter, mas tive que montar todo o backend do zero. E foi aí que me aprofundei de vez no <strong>Node.js</strong>.
            Criei umas APIs pra dominar os dados do app, fiz um sistema de login e até liguei com o Mercado Pago — tudo no Node.js. O café ajudou, mas foquei total.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">⚙️ Backend com Node.js, REST e Java
          </h2>
          <p>
            <strong>Node.js</strong> me ganhou de cara quando comecei a estudar e aprender mais sobre.
          </p>
          <p>
            Mas, sinceramente não largo o <strong>Java</strong>. Em uns projetos mais sérios ou da faculdade, eu prefiro usar a força do Java com Spring Boot. O tipo forte, os padrões e a galera são uma base firme.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">☁️ Salesforce e mistérios de firma
          </h2>
          <p>
            Notei que juntar sistemas dá um poder gigante.
            Consegui aprender tudo que sei hoje em dia de <strong>Salesforce</strong>. Longe dos palcos, claro, mas lá mora a informação pura. Ligar tudo com código me encanta demais.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">🎯 Como decido hoje em dia?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Resolve a treta de verdade?</li>
            <li>Eu consigo cuidar sozinho?</li>
            <li>Vale a pena ralar pra aprender?</li>
            <li>A galera usa e ajuda?</li>
          </ul>

          <p>
            Se sim, me jogo! Se não, sigo na busca.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">📌 Resumo da ópera
          </h2>
          <p>
            A melhor ferramenta não é a com mais hype ou a mais famosa, mas a que te deixa firme, mostra quem você é e resolve o problema.
          </p>
          <p>
            E se encontrar algo novo, relaxa! O segredo é escolher com a cabeça.
          </p>

          <blockquote className="text-[#43f8b6] italic mt-6 border-l-4 border-[#43f8b6] pl-4">
            “Não existe fórmula mágica. Existe a ferramenta ideal pra você, na hora certa.” — Rafael Almeida
          </blockquote>
        </div>
      </div>
    </div>
  );
}
