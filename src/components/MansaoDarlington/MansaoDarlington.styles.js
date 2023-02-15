import styled from "styled-components";

export const MansaoDarlington = styled.div`
  text-align: center;
  width: 100vw;

  img {
    border: thick double rgba(82, 60, 54, .9);
    border-radius: 3px;

  }

  .hero {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 30px 15px;
    padding: 15px;

    @media (max-width: 768px) {
      flex-direction: column ;
    }
  } 
  
  .inner-wrapper {
    align-items: center;
    color: #111;
    display: flex;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    justify-content: space-around;
    margin: 15px 0;
    width: 100%;
    padding: 45px 30px;

    .hero {
      @media(max-width: 768px) {
        margin: 0;
        width: 100vw;
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        margin: 15px 0;
      }
    }

    .box {
      display: flex;
      flex-direction: column;
      padding: 30px;
      text-align: justify;
      width: 100%;
    }

    p {
      font-size: 14px;
      padding-bottom: 30px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      padding: 15px;
    }
  }

  .navbarLink {
    color: #111;
    padding: 3px 9px;
  }

  .boxImg {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50vw;

    &__tipologia {
      flex-wrap: wrap;
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 0 10px;
      text-align: center;
    }
  }


  .boxText {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 5px;
    text-align: justify;
    width: 50vw;

    @media (max-width: 768px) {
      padding: 0 10px;
      margin: 45px 5px;
      width: 100%;
    }
  }
  

  .titulo {
    background: linear-gradient(rgba(82, 60, 54, .6), rgba(82, 60, 54, .9));
    border-radius: 1px 100px / 120px;
    color: yellow;
    font-family: 'Dancing Script';
    font-size: 2.1rem;
    font-weight: 600;
    padding: 15px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .subTitulo {
    background: linear-gradient(transparent, rgba(82, 60, 54, .06));
    height: 100%;
    font-size: 1.2rem;
    padding: 15px 30px;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .descricao {
    align-items: center;
    background: linear-gradient(transparent, rgba(82, 60, 54, .06));
    border-radius: 6px;
    font-size: 1rem;
    line-height: 1.8;
    padding: 30px;

    @media (max-width: 768px) {
      font-size: .8rem;
    }

    li {
      list-style: square;
    }
  }


  .box_pavimento {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 15px 0;
      text-align: justify;
      width: 100%;

      @media (max-width: 768px) {
        margin: 15px 0;        
      }
  }

  .subTitulo_pavimento {
    padding: 15px;
    text-align: center;
  }

  .descricao_pavimento {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
