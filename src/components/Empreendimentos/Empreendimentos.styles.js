import styled from "styled-components";

export const Empreendimentos = styled.div`
  left: 0;
  margin: 0;
  right: 0;
  padding: 0;
  width: 100vw;
  z-index: 9;

  
  @media (max-width: 768px) {
    height: auto;
  }

  .header {
    align-items: center;
    color: rgba(22, 74, 115, 1); 
    font-family: 'Prosto One', cursive, sans-serif;
    font-size: 30px;
    font-weight: 600;
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
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 400;
    justify-content: space-around;
    margin: 0px;
    min-height: 300px;
    padding: 30px;

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

