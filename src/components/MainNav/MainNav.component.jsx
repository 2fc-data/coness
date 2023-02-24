import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopNav } from '../Data/MainNav.data';
import * as Styled from './MainNav.styles';
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

function MainNav() {

  const [navItems, setNavItems] = useState([0]);
  useEffect(() => {
    setNavItems(getTopNav());
  }, [0])

  const [active, setActive] = useState('nav__active');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    active === 'nav__active' 
      ? setActive('nav__menu ') 
      : setActive('nav__active') 

    toggleIcon === 'nav__toggler' 
      ? setToggleIcon('nav__toggler toggle') 
      : setToggleIcon('nav__toggler')
  }

  return (
    <Styled.MainNav>
      <div className='inner-wrapper'>

        <div className='nav__brand'>
          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
      
        <ul className={active}>
          {navItems.map((item) => (
            <li key={item.id} className='nav__item'>
              <Link to={item.href} onClick={navToggle} className='nav__link'>{item.label}</Link>
            </li>
            ))}
        </ul>
      </div>


      <div className='inner-wrapper'>
        <Link to="/"> 
          <Styled.Logo alt="Essencial - Construtora e Incorporadora"/>
        </Link>
      </div>

      <div className='inner-wrapper'>
        <div className='nav__contact'>
          <u>Vendas:</u>
          <p>
            <BsWhatsapp />
            <a 
              href="https://api.whatsapp.com/send?phone=5535988893840&text=Olá,%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20empreendimentos,%20da%20Essencial%20Construtora,%20obrigado!" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className='nav__contact--whatsapp'>(35) 98889-3840</p>
            </a>
          </p>

          <p>
            <BsTelephone />
            <p className='nav__contact--fone'>(35) 3722-3840</p>
          </p>
        </div>
      </div>
    </Styled.MainNav>
  );
}

export default MainNav;
