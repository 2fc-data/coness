import styled from "styled-components";

export const Contato = styled.div`
  left: 0;
  margin: 0px;
  right: 0;
  padding: 0;
  width: 100vw;

  .inner-wrapper {  
    align-items: center;
    color: #111;
    display: flex;
    font-family: 'Prosto One', cursive, sans-serif;
    justify-content: space-around;
    margin: 30px 0;
    padding: 30px 0;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
  }

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

  .map {
    align-items: center;
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    background-image: url(/images/map.png);
    height: 600px;
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
      font-size: 14px;
      height: 500px;
      width: 450px;
    }

  }

  .fones {
    align-items: center;
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    color: rgba(22, 74, 115, 1);
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    justify-content: center;
    height: 600px;
    margin: 15px 0;
    text-align: center;
    width: 450px;

    h4{
      line-height: 5;
    }

    h3{
      line-height: 6;
    }

    p{
      line-height: 3;
      font-weight: 400;
    }

    @media (max-width: 768px) {
      height: 500px;
      width: 450px;
    }
  }

`;
