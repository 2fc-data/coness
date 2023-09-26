import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  color: rgba(22, 74, 115, 1); 
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  padding: 18px 0;
  padding-left: 10%;
  position: relative;
  text-shadow: 1px 3px 3px #ccc;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 15px;
    padding-left: 5%;
  }

`;
