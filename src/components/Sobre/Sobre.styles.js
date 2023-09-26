import styled from "styled-components";

export const Sobre = styled.div`
  left: 0;
  margin: 0px;
  right: 0;
  padding: 0;
  width: 100vw;

  @media (max-width: 768px) {
    
  }

  .header {
    align-items: center;
    color: rgba(22, 74, 115, 1);
    font-family: 'Prosto One', cursive, sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin: 30px 0;
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
    display: flex;
    flex-direction: column;
    color: #333;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 30px 0;
    padding: 30px;
    width: 100vw;

    p {
      font-size: 1rem;
    }


    .content {
      display: flex;
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

    .titulo {
      background: linear-gradient(rgba(132, 69, 41, .1), rgba(230, 169, 5, .6));
      border-radius: 1px 100px / 120px;
      color: rgba(22, 74, 115, 1);
      font-size: 1.5rem;
      margin-top: 60px;
      padding: 15px 30px;
    }

    .subTitulo {
      background: linear-gradient(transparent, rgba(230, 169, 5, .1));
      color: rgba(22, 74, 115, 1);
      font-size: 1.2rem;
      padding: 15px 30px;
      text-align: center;
    }

    .descricao {
      background: linear-gradient(transparent, rgba(230, 169, 5, .1));
      align-items: center;
      font-size: 1rem;
      line-height: 2.1;
      padding: 15px 30px;

      li {
        list-style: square;
      }
    }

  }




  .box-incorporadora {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
    width: 100vw;
    padding: 30px;
    text-align: center;

    img{
      /* border: thick double; */
      border: .18rem solid;
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      flex-direction: column ;
    }


    .pic {
      margin: 10px 0;
      text-align: center;
      width: 90%;
    }

    .text {
      padding: 0px;
      text-align: justify;
      width: 70vw;
      
      @media (max-width: 768px) {
        padding: 0px;
        width: 100%;
      }
    }
  }

`;
