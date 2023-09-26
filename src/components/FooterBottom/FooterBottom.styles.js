import styled from "styled-components";

export const FooterBottom = styled.div`
  background-color: radial-gradient(to top, rgba(242, 244, 245, 1), rgba(242, 244, 245, .1)); // #f2f4f5;
  border-top: 0px solid #940f1a; // rgba(58, 6, 10, 1); 
  bottom: 0;
  display:flex;
  height: auto;
  justify-content: space-around;
  left: 0;
  margin: 0;
  right: 0;
  padding: 9px;
  position: relative;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .inner-wrapper {
    align-items: center;
    margin: 12px;
    width: 100%;
    padding: 0px;
    text-align: center;

    p {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      text-align: left;
    }
  }
  
  .navbarLink {
    color: #1D6196;
    font-size: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    padding: 3px;
  }

  .nav__link {
    color: #164A73;

    &:hover {
      border-bottom: 3px solid #164A73;
    }
  }
`;
