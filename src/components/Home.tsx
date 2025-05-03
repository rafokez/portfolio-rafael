import React from 'react';
import avatar from '../assets/rafael.png';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiGit,
    SiFlutter,
    SiDart,
    SiKotlin,
    SiSalesforce,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import journey from '../assets/journey.png';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import ilustracao from '../assets/ciclou.png';


export default function Home() {
    // ⬇️ Cole isso AQUI:
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .send(
                'service_1keg1hm',
                'template_e7t48mk',
                formData,
                'hVKYHrcz_gPd1Fh8_'
            )
            .then(() => {
                setIsSending(false);
                setSent(true);
                setFormData({ from_name: '', reply_to: '', message: '' });
            })
            .catch(() => setIsSending(false));
    };

    return (
        <ReactFullpage
            navigation
            scrollOverflow={true} // ⬅️ ISSO AQUI RESOLVE
            credits={{ enabled: false }}
            anchors={['inicio', 'sobre', 'tech', 'conteudo', 'contato']}
            navigationTooltips={['Início', 'Sobre', 'Tecnologias', 'Conteúdo', 'Contato']}
            showActiveTooltip
            scrollingSpeed={800}
            render={() => {
                return (
                    <div>
                        {/* Seção 1 - Hero */}
                        <div className="section bg-[#111111] text-white">
                            <section className="h-screen flex items-center justify-center px-6 md:px-20">
                                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                    >
                                        <p className="text-sm text-gray-400 font-poppins tracking-wide  mb-2">OLÁ, PRAZER! 👋 EU SOU</p>
                                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Rafael Almeida</h1>
                                        <h2 className="mt-4 text-xl text-[#43f8b6] font-semibold font-poppins">
                                            Full Stack Developer • Backend • Mobile 📱
                                        </h2>
                                        <p className="mt-4 text-gray-300 text-base font-poppins leading-relaxed max-w-md">
                                            Experiência com Node.js, Java, Kotlin, ActionScript, Salesforce, HTML, CSS, JS, REST APIs, Flutter & Dart.
                                            Formado pela ETEC Adolpho Berezin, atualmente cursando ADS na Anhembi Morumbi.
                                        </p>
                                        <a
                                            href="#contato"
                                            className="group relative inline-block mt-6 px-6 py-3 font-semibold text-[#111] bg-[#43f8b6] overflow-hidden rounded-full z-0 transition-all duration-300"
                                        >
                                            <span className="absolute left-0 top-0 h-full w-0 bg-[#111111] transition-all duration-500 ease-out group-hover:w-full z-[-1]"></span>
                                            <span className="relative z-10 group-hover:text-[#43f8b6] font-poppins">Me contate!</span>
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        className="relative flex justify-center items-center"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                    >
                                        <img src={avatar} alt="Rafael" className="w-180 h-180 object-contain" />
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-[#6a5e3f]"></div>
                                        <div className="absolute bottom-12 left-6 w-8 h-8 bg-[#1f403d]"></div>
                                        <div className="absolute top-6 right-10 w-6 h-6 bg-[#7f2d42]"></div>
                                    </motion.div>
                                </div>
                            </section>
                        </div>

                        {/* Seção 2 - Sobre */}
                        <div className="section bg-[#1b1b1b] text-white">
                            <section className="h-screen flex items-center px-6 md:px-20">
                                <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                                    {/* Texto centralizado mais suavemente */}
                                    <div className="md:pl-10">
                                        <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-[#43f8b6] n mb-6">
                                            Ao longo da jornada,
                                        </h2>
                                        <p className="text-gray-300 mb-4">
                                            Já participei de diversos projetos que misturam tecnologia e propósito. Um deles é o <strong>VIA</strong>, um app de rastreamento de trens e metrôs em tempo real que apresentei na estação Brás a convite da CPTM. Também desenvolvi o <strong>Ciclou App</strong>, que conecta pontos de coleta de óleo de cozinha com usuários — já disponível na Play Store.
                                        </p>
                                        <p className="text-gray-300 mb-4">
                                            Criei landing pages como a da <strong>Sabrina Camara</strong> e do <strong>Instituto Amar</strong>, além de sites funcionais como o <strong>Rota Express</strong> (busca de voos via API Amadeus) e o <strong>Read & Relax</strong> (consulta de livros com API do Google). Com o <strong>Skyline</strong>, ganhei 3º lugar em um hackaton com um app voltado à prevenção de desastres urbanos.
                                        </p>
                                        <p className="text-gray-400">
                                            No dia a dia, trabalho com <strong>Node.js, Java, Kotlin, REST APIs, Flutter & Dart</strong>, além de toda base web com <strong>HTML, CSS e JavaScript</strong>. Tenho formação técnica em Desenvolvimento de Sistemas e atualmente curso ADS na Anhembi Morumbi. Gosto de criar soluções completas, da lógica ao layout.
                                        </p>

                                    </div>

                                    {/* Espaço reservado para animação / storyset */}
                                    <div className="flex justify-center">
                                        <motion.img
                                            src={journey}
                                            alt="Jornada"
                                            className="w-full h-auto object-contain max-w-md"
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                    </div>

                                </div>
                            </section>
                        </div>

                        {/* Seção 3 - Skills  */}
                        <div className="section bg-[#111111] text-white font-poppins">
                            <section className="min-h-screen flex items-center justify-center px-6 md:px-20">
                                <div className="max-w-6xl mx-auto text-center">

                                    {/* Título */}
                                    <p className="uppercase text-sm text-gray-400 tracking-wider mb-2">um problema é uma chance de fazer seu melhor.</p>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Experiência</h2>
                                    <p className="text-gray-300 max-w-3xl mx-auto mb-4">
                                        Minhas principais expertises envolvem desenvolvimento backend e mobile, com domínio em <span className="text-[#43f8b6] font-semibold">Node.js</span>, <span className="text-[#43f8b6] font-semibold">Java</span>, <span className="text-[#43f8b6] font-semibold">Kotlin</span> e <span className="text-[#43f8b6] font-semibold">Flutter</span>.
                                        Também atuo com <span className="text-[#43f8b6] font-semibold">REST APIs</span>, soluções web com <span className="text-[#43f8b6] font-semibold">HTML</span>, <span className="text-[#43f8b6] font-semibold">CSS</span>, <span className="text-[#43f8b6] font-semibold">JS</span> e tenho experiência com <span className="text-[#43f8b6] font-semibold">Salesforce</span>.
                                    </p>
                                    <p className="text-gray-400 mb-10">
                                        Aqui estão algumas tecnologias que já utilizei em projetos.
                                    </p>

                                    {/* Ícones */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center text-sm text-white">
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiJavascript size={40} />
                                            JavaScript
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiHtml5 size={40} />
                                            HTML5
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiCss3 size={40} />
                                            CSS3
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiReact size={40} />
                                            React
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiNodedotjs size={40} />
                                            Node.js
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <DiJava size={40} />
                                            Java
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiKotlin size={40} />
                                            Kotlin
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiFlutter size={40} />
                                            Flutter
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiDart size={40} />
                                            Dart
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiSalesforce size={40} />
                                            Salesforce
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <SiGit size={40} />
                                            Git
                                        </motion.div>
                                        <motion.div
                                            className="flex flex-col items-center gap-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            <VscCode size={40} />
                                            VS Code
                                        </motion.div>
                                    </div>

                                </div>
                            </section>
                        </div>

                        {/* ✅ Seção 4 - Conteúdo adicional (nova) */}
                        <div className="section bg-[#111111] text-white">
                            <section className="h-screen flex flex-col justify-start pt-12 px-6 md:px-20">
                                <div className="max-w-6xl mx-auto w-full">

                                    {/* Storyset ou imagem decorativa */}
                                    <div className="w-full flex justify-center mb-1">
                                        <img
                                            src={ilustracao}
                                            alt="Ilustração"
                                            className="w-80 md:w-96 h-auto object-contain"
                                        />
                                    </div>

                                    {/* Grid dos cards */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Box 1 */}
                                        <div className="bg-[#1a1a1a] p-10 shadow-md border-l-2 border-[#43f8b6] rounded-md">
                                            <h2 className="text-3xl font-bold text-[#43f8b6] mb-4">Eu construo e desenvolvo</h2>
                                            <p className="text-base text-white mb-6">
                                                Projetos open source, sistemas web, apps e soluções para empresas.
                                                Foco em backend, mobile e integrações.
                                            </p>
                                            <a
                                                href="/Trabalhos"
                                                className="relative group inline-flex items-center px-5 py-2 border-2 border-[#43f8b6] text-[#43f8b6] rounded-full overflow-hidden transition-colors duration-300"
                                            >
                                                <span
                                                    className="absolute left-0 top-0 h-full w-0 bg-[#43f8b6] z-0 transition-all duration-500 ease-out group-hover:w-full"
                                                ></span>
                                                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                                    Ver meus projetos <span className="ml-2">➝</span>
                                                </span>
                                            </a>
                                        </div>

                                        {/* Box 2 */}
                                        <div className="bg-[#1a1a1a] p-10 shadow-md border-l-2 border-[#43f8b6] rounded-md">
                                            <h2 className="text-3xl font-bold text-[#43f8b6] mb-4">Eu escrevo, às vezes</h2>
                                            <p className="text-base text-white mb-6">
                                                Sobre desenvolvimento, carreira, estudos e experiências. Em breve no meu blog!
                                            </p>
                                            <a
                                                href="/Artigos"
                                                className="relative group inline-flex items-center px-5 py-2 border-2 border-[#43f8b6] text-[#43f8b6] rounded-full overflow-hidden transition-colors duration-300"
                                            >
                                                <span
                                                    className="absolute left-0 top-0 h-full w-0 bg-[#43f8b6] z-0 transition-all duration-500 ease-out group-hover:w-full"
                                                ></span>
                                                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                                    Veja alguns artigos <span className="ml-2">➝</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Seção 5 - Contato */}
                        <div className="section bg-[#111111] text-white">
                            <div className="flex flex-col justify-center px-6 md:px-20 h-screen overflow-y-auto">
                                <div className="max-w-3xl mx-auto w-full py-10">
                                    <h2 className="text-4xl font-bold text-[#43f8b6] mb-6">Entre em contato</h2>

                                    <form onSubmit={sendEmail} className="space-y-6">
                                        <div>
                                            <label htmlFor="from_name" className="block mb-1 text-sm">Seu nome</label>
                                            <input
                                                type="text"
                                                name="from_name"
                                                required
                                                value={formData.from_name}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-[#1b1b1b] border border-[#43f8b6] rounded-md text-white"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="reply_to" className="block mb-1 text-sm">Seu e-mail</label>
                                            <input
                                                type="email"
                                                name="reply_to"
                                                required
                                                value={formData.reply_to}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-[#1b1b1b] border border-[#43f8b6] rounded-md text-white"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block mb-1 text-sm">Mensagem</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-[#1b1b1b] border border-[#43f8b6] rounded-md text-white resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSending}
                                            className="relative group inline-flex items-center px-6 py-3 border-2 border-[#43f8b6] text-[#43f8b6] rounded-full overflow-hidden transition-colors duration-300"
                                        >
                                            <span
                                                className="absolute left-0 top-0 h-full w-0 bg-[#43f8b6] z-0 transition-all duration-500 ease-out group-hover:w-full"
                                            ></span>
                                            <span className="relative z-10 group-hover:text-black transition">
                                                {isSending ? 'Enviando...' : 'Enviar mensagem'}
                                            </span>
                                        </button>

                                        {sent && <p className="text-green-400 mt-4">Mensagem enviada com sucesso! ✅</p>}
                                    </form>

                                    {/* Bloco de contato + currículo lado a lado */}
                                    <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400 gap-6">

                                        {/* Dados de contato */}
                                        <div>
                                            <p className="mb-1">
                                                <strong>Email:</strong> raphael.k.business@gmail.com
                                            </p>
                                            <p className="mb-1">
                                                <strong>Telefone:</strong> (13) 98834-2378
                                            </p>
                                            <p className="mb-1">
                                                <strong>GitHub:</strong>{' '}
                                                <a
                                                    href="https://github.com/rafokez"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#43f8b6] hover:underline"
                                                >
                                                    github.com/rafokez
                                                </a>
                                            </p>
                                        </div>

                                        {/* Botão do currículo */}
                                        <div>
                                            <a
                                                href="/curriculo.pdf"
                                                download
                                                className="inline-flex items-center gap-2 text-[#43f8b6] border border-[#43f8b6] px-4 py-2 rounded-full text-sm hover:bg-[#43f8b6] hover:text-black transition"
                                            >
                                                Baixar Currículo
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
}
