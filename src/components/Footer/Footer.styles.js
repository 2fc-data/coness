import styled from "styled-components";
import Logo from '../../assets/essencial_logo.png';

export const Footer = styled.div`
  background: radial-gradient(rgba(22, 74, 115, 1), rgba(22, 74, 115, .9)); // Azul Royal #164A73
  border-top: 6px solid #a8061d;
  color: #ccc;

  .inner-wrapper {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    font-weight: 400;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;    
    width: 100%;

    @media(max-width: 768px) {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      
      margin: 30px 5px;
      min-width: 234px;

      &__header {
        border-bottom: 1px solid #eee;
        color: #eee;
        font-family: 'Prosto One', cursive, sans-serif;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 9px;
        text-align: center;
        padding: 10px;
      }

      &__endereco {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding-left: 6px;
      }

      &__fone {
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding-left: 6px;

        &:hover {
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.3));
          color: #fff;
        }
      }

      &__links {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        padding-left: 6px;
      }

      &__whatsapp {
        align-items: center;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 15px;
        margin-right: 5px;
        padding-left: 6px;
      }

      &__inline {
        display: flex;
        flex-direction: row;
        padding-left: 15px;

        &:hover {
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.3));
          color: #fff;
        }

        @media(max-width: 768px) {
          justify-content: center;
        }

      }
      


      @media(max-width: 768) {
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
      }

    }


    nav {
      display: flex;
      flex-direction: column;

      @media(max-width: 768) {
        padding: 6px;
      }

      ul {
        text-decoration: none;
        list-style: none;
      }

      li {
        line-height: 1.5rem;
        margin-left: 6px;


        &:hover {
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.3));
          border-radius: 3px;
          color: #fff;
        }
      }

      a {
        border-radius: 3px;
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        

        @media(max-width: 768) {
          margin: 0px 0;
        }

        &:last-child {
          margin-bottom: 0;
        }

      }



    }
  }
`;


export const LogoImg = styled((props) => {

  const logo = Logo;
  return <img src={logo} {...props} alt='Essencial - Construtora e Incorporadora' />
})`
  background-color: white;
  border-radius: 6px;
  height: 175px;
  width: 250px;

  @media(max-width: 768px) {
  }
`;
