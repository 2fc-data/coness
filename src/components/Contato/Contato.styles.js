import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

import LogoImage from '../../assets/essencial_logo.png';
import LogoImageShort from '../../assets/essencial_logo_icon.png';

export const Contato = styled.div`
  left: 0;
  margin: 0px;
  right: 0;
  padding: 0;
  width: 100vw;

  .header {
    align-items: center;
    color: rgba(22, 74, 115, 1); 
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 36px;
    font-weight: 700;
    margin-top: 30px;
    padding: 18px 0;
    padding-left: 10%;
    position: relative;
    /* text-shadow: 1px 3px 3px #eee; */
    width: 100vw;

    @media (max-width: 768px) {
      margin-top: 15px;
      padding-left: 5%;
    }
  }

  .inner-wrapper {  
    align-items: center;
    color: #111;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Prosto One', cursive, sans-serif;
    justify-content: space-around;
    margin: 30px 5px;
    padding: 30px 5px;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 10px 0;
      padding: 5px;
    }
  }

  .map {
    align-items: center;
    border: thick double rgba(22, 74, 115, .9);
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    background-image: url(/images/map.png);
    height: 700px;
    margin: 15px 0;
    width: 450px;

    &__over {
      background: transparent;
      height: 100%;
      width: 100%;
    }

    :hover{
      cursor: pointer;
    }

    @media (max-width: 768px) {
      height: 600px;
      width: 90%;
    }

  }

  .fones {
    align-items: center;
    border: thick double rgba(22, 74, 115, .9);
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    color: rgba(22, 74, 115, 1);
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    height: 700px;
    justify-content: center;
    padding: 0 15px;
    text-align: center;
    width: 450px;

    h4{
      line-height: 4;
    }

    h3{
      line-height: 3;
    }

    p{
      line-height: 2;
      font-weight: 400;
    }
    
    @media (max-width: 768px) {
      display: flex;
      height: 100%;
      padding: 0 12px;
    }
  }

  nav {
    align-items: center;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 0 21px;
    width: 100%;


    :hover{
      background: linear-gradient(transparent, rgba(22, 74, 115, 0.3));
      cursor: pointer;
    }

    @media(max-width: 768) {
      padding: 6px;
      flex-direction: column;
    }

    a {
      border-radius: 3px;
      color: rgba(22, 74, 115, 1);
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      font-size: 14px;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .boxHeader {
    display: flex;
    justify-content: space-between;

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
