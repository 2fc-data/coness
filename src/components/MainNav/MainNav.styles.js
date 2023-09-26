import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import LogoImage from '../../assets/essencial_logo.png';
import LogoImageShort from '../../assets/essencial_logo_icon.png';

export const MainNav = styled.div`
  align-items: center;
  background: linear-gradient(to top, rgba(22, 74, 115, .12), rgba(255, 255, 255, 1));
  display: flex;
  height: 166px;
  justify-content: space-around;
  position: relative;
  width: 100vw;
  z-index: 9;

  @media(max-width: 768px) {
    height: 116px;
  }

  .inner-wrapper {
    align-items: center;
    padding: 0px;
    text-align: center;
    width: 100%;
  
    .nav__brand {
      align-content: center;
      border: 0px solid rgba(22, 74, 115, .9);
      color: #111;
      display: flex;
      font-family: 'Lato', Arial, Helvetica, sans-serif;
      font-size: 30px;
      font-weight: 400;
      justify-content: center;
      
      h6{
        font-size: 12px;
      }
    }

    .nav__toggler div {
      align-items: center;
      background: rgba(22, 74, 115, .9);
      border-radius: 5rem;
      height: 0.39rem;
      margin: 0.39rem;
      transition: 0.21s ease-in-out;
      width: 3rem;
    }

    .nav__toggle {
      align-items: center;
      cursor: pointer;
      display: block;
    }

    .nav__active {
      display: none;
      transform: translateX(0%);
      transition: .3s ease-in-out;
    }

    /* Toggler Icon Animation */
    .toggle .line1 {
      transform: rotate(45deg) translate(0.1em, 0.5em) ;
    }
    .toggle .line2 {
      opacity: 0;
    }
    .toggle .line3 {
      transform: rotate(-45deg) translate(0.1em, -0.5em) ;
    }

    .nav__menu {
      align-items: center;
      background: linear-gradient(to right, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9));
      color: #164A73;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 75vh;
      position: absolute;
      top: 166px;
      transform: translateX(0%);
      transition: 0.3s ease-in-out;
      width: 100%;   
      
      @media(max-width: 768px) {
        top: 116px;
      }
    }

    .nav__item {
      border-bottom: 0px solid #164A73; // rgba(227, 189, 20, 1);
      color: #164A73;
      display: inline-block;
      font-weight: bold;
      padding: 12px;
      text-transform: uppercase;
      width: 90vw;

    }

    .nav__link {
      background-color: rgba(255, 255, 255, .01);
      color: #164A73; // rgba(227, 189, 20, 1); Dourado
      width: 90vw;
      padding: 12px 30px;

      &:hover {
        background-color: #164A73;
        border-radius: 9px;
        color: rgba(255, 255, 255, 1);
      }
    }

    .nav__contact {
      align-items: center;
      color: rgba(22, 74, 115, .9);
      display: flex;
      flex-direction: column;
      line-height: 1.5rem;
      width: 100%;
        
      @media(max-width: 768px) {
        font-size: 12px;
      }

      &--fone {
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        padding-left: 6px;

        @media(max-width: 768px) {
          font-size: 12px;
        }
      }

      &--whatsapp {
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        padding-left: 6px;

        @media(max-width: 768px) {
          font-size: 12px;
        }
      }

      p {
        display: flex;
        flex-direction: row;
        padding: 3px;
        
        &:hover {
          background-color: #164A73;
          border-radius: 9px;
          color: rgba(255, 255, 255, 1);
        }
      }

      a {
        color: rgba(22, 74, 115, .9);
      }
    }
    
  }
`;

export const Logo = styled((props) => {
  const isMobile = useMediaQuery({ maxWidth: 768});
  const logo = !isMobile ? LogoImage : LogoImageShort;
  return <img src={logo} {...props} alt='Essencial - Construtora e Incorporadora' />
})`
  height: 150px;
  width: 234px;

  @media(max-width: 768px) {
    height: 120px;
    width: 172px;
  }
`;
