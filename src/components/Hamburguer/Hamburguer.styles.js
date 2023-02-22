import styled from "styled-components";

export const Hamburguer = styled.div`

  background: #ccc;
  display: flex;
  gap: clamp(2rem, 8vh, 4rem);
  max-width: 300px;
  padding: 3rem;

  wrapper {


    button {
      background: transparent;
      border: 10px solid var(--button-color, #000);
      border-radius: 1rem;
    }

    .button-one {
      --button-color: #333;
    }
  }

`;
