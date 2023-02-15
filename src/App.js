import './App.css';
import MainNav from './components/MainNav/MainNav.component';
import Footer from './components/Footer/Footer.component';
import FooterBottom from './components/FooterBottom/FooterBottom.component';
import Home from './components/Home/Home.components';
import Contato from './components/Contato/Contato.component';
import Empreendimentos from './components/Empreendimentos/Empreendimentos.component';
import MaisonMariaThereza from './components/MaisonMariaThereza/MaisonMariaThereza.component';
import MaisonEsperance from './components/MaisonEsperance/MaisonEsperance.component';
import ResidencialCarmoRibeiro from './components/ResidencialCarmoRibeiro/ResidencialCarmoRibeiro.component';
import MansaoDarlington from './components/MansaoDarlington/MansaoDarlington.component';
import Sobre from './components/Sobre/Sobre.component';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainNav />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empreendimentos" element={<Empreendimentos />} />
        <Route path="/maisonmariathereza" element={<MaisonMariaThereza />} />
        <Route path="/maisonesperance" element={<MaisonEsperance />} />
        <Route path="/residencialcarmoribeiro" element={<ResidencialCarmoRibeiro />} />
        <Route path="/mansaoDarlington" element={<MansaoDarlington />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
      <FooterBottom />
    </Router>
  )
}

export default App;
