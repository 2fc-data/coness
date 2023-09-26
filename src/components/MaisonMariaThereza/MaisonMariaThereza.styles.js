import styled from "styled-components";

export const MaisonMariaThereza = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  font-weight: 400;

  .inner-wrapper {
        
    .content {
      border: 0px dashed black;
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 45px 0px;
      padding: 0 15px;
      width: 100vw;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    p {
      font-size: 14px;
      padding-bottom: 30px;
    }

    img {
      border: thick double rgba(22, 74, 115, .9);
      border-radius: 3px;
      height: 87%;
      width: 100%;
    }

    .navbarLink {
      color: #111;
      padding: 3px 9px;
    }

    .boxImg {
      align-items: center;
      border: 0px solid red;
      height: auto;
      margin: 0 15px;
      text-align: center;
      width: 45vw;

      &__tipologia {
        flex-wrap: wrap;
        width: 100%;
      }

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .boxText {
      background: linear-gradient(rgba(22, 74, 115, .01), rgba(22, 74, 115, .1));
      border: 0px solid blue;
      display: flex;
      height: 360px;
      justify-content: center;
      line-height: 2.5;
      margin: 0px 15px;
      padding: 0px 30px;
      width: 45vw;

      @media (max-width: 768px) {
        padding: 0 10px;
        margin: 45px 5px;
        width: 100vw;
      }
    }
  
  .titulo {
    align-items: center;
    background: linear-gradient(rgba(22, 74, 115, .6), rgba(22, 74, 115, .9));
    border-radius: 1px 100px / 120px;
    color: yellow;
    font-family: 'Dancing Script';
    font-size: 3rem;
    padding: 21px;
    text-align: center;
    width: 45vw;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .subTitulo {
    font-size: 1.2rem;
    padding: 15px 30px;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .descricao {
    align-items: center;
    border-radius: 6px;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    line-height: 1.2;
    padding: 5px 30px;
    text-align: justify;

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
      margin: 5px 0;
      text-align: justify;
      width: 50%;

      @media (max-width: 768px) {
        margin: 15px 0;        
      }
  }

  .subTitulo_pavimento {
    padding: 5px;
    text-align: center;
  }

  .descricao_pavimento {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
`;
