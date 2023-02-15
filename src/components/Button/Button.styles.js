import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: rgba(255, 255, 255, .9);
  border: 1px solid rgba(22, 74, 115, .6);
  border-radius: 6px;
  color: rgba(22, 74, 115, .9);
  cursor: pointer;
  font-family: 'Cinzel';
  font-size: 16px;
  font-weight: 600;
  padding: 9px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, .6);
    color: rgba(255, 255, 255, .9);
  }
`;
