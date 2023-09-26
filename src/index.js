import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
// import { Outlet } from 'react-router-dom';

import MainNav from './components/MainNav';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <MainNav />
    <App/>
    <Footer />
    <FooterBottom />
  </Router>
);

reportWebVitals();
