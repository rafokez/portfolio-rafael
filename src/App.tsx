import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trabalhos from './components/Work'; // ou ./pages/Trabalhos se for esse o nome real
import Footer from './components/Footer';
import Artigos from './components/Articles';
import EscolhaDasStacks from './components/artigos/escolha-das-stacks';
import IntegracaoAPIs from './components/artigos/integracao-apis';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhos" element={<Trabalhos />} />
        <Route path="/artigos" element={<Artigos />} />

        {/*Seção de Artigos */}
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigos/integracao-apis" element={<IntegracaoAPIs />} />
        <Route path="/artigos/escolha-das-stacks" element={<EscolhaDasStacks />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;