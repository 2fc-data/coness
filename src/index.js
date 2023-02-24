import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
import { Home } from './components/Home';
import Contato from './components/Contato';
import Empreendimentos from './components/Empreendimentos';
import MaisonMariaThereza from './components/MaisonMariaThereza';
import MaisonEsperance from './components/MaisonEsperance';
import ResidencialCarmoRibeiro from './components/ResidencialCarmoRibeiro';
import MansaoDarlington from './components/MansaoDarlington';
import Sobre from './components/Sobre';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
          <Route element={<App />} >
            <Route path="/" element={<Home />} />
            <Route path="contato" element={<Contato />} />
            <Route path="empreendimentos" element={<Empreendimentos />} />
            <Route path="maisonmariathereza" element={<MaisonMariaThereza />} />
            <Route path="maisonesperance" element={<MaisonEsperance />} />
            <Route path="residencialcarmoribeiro" element={<ResidencialCarmoRibeiro />} />
            <Route path="mansaoDarlington" element={<MansaoDarlington />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
