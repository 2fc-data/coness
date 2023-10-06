import styled from "styled-components";

export const MaisonEsperance = styled.div`
  text-align: center;
  width: 100vw;

  img{
    border: thick double rgba(132, 69, 41, .9);
    border-radius: 3px;
  }

  .hero {
    align-items: center;
    border-bottom: 0px solid #999;
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

    .hero{
      border-bottom: 1px solid #999;

      @media (max-width: 768px) {
        margin: 0;
        width: 100vw;
      }
    }

    p {
      font-size: 14px;
      padding-bottom: 30px;
    }

    @media (max-width: 768px) {
      flex-direction: column ;
      padding: 15px;
    }
  }

  .navbarLink {
    color: #111;
    padding: 3px 9px;
  }

  .boxImg {
    text-align: center;
    width: 50vw;

    @media (max-width: 768px) {
      padding: 0 10px;
      text-align: center;
    }
  }

  .boxText {
    padding: 30px 5px;
    text-align: justify;
    width: 50vw;

    @media (max-width: 768px) {
      padding: 0 10px;
      height: auto;
      margin: 45px 5px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column ;
  }

  .titulo {
    background: linear-gradient(rgba(132, 69, 41, .1), rgba(230, 169, 5, .6));
    border-radius: 1px 100px / 120px;
    color: black;
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
    background: linear-gradient(transparent, rgba(230, 169, 5, .1));
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
    background: linear-gradient(transparent, rgba(230, 169, 5, .1));
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
`;
