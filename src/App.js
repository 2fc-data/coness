import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import Contato from './components/Contato';
import Empreendimentos from './components/Empreendimentos';
import MaisonMariaThereza from './components/MaisonMariaThereza';
import MaisonEsperance from './components/MaisonEsperance';
import ResidencialVittoriale from './components/ResidencialVittoriale';
import ResidencialCarmoRibeiro from './components/ResidencialCarmoRibeiro';
import MansaoDarlington from './components/MansaoDarlington';
import Sobre from './components/Sobre';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/maisonmariathereza" element={<MaisonMariaThereza />} />
      <Route path="/maisonesperance" element={<MaisonEsperance />} />
      <Route path="/residencialvittoriale" element={<ResidencialVittoriale />} />
      <Route path="/residencialcarmoribeiro" element={<ResidencialCarmoRibeiro />} />
      <Route path="/mansaoDarlington" element={<MansaoDarlington />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App;
