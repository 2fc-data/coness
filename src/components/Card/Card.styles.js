import styled from "styled-components";

export const Card = styled.div` // .container
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
  padding: 15px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .card {
    background: linear-gradient(transparent, rgba(22, 74, 115, .9));
    border-radius: 6px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 460px;
    margin: 45px 15px;
    padding: 15px;
    position: relative;
    transition: 0.3s ease-in-out;
    transition-delay: 0.3s;
    width: 330px;

    @media (max-width: 768px) {
      margin: 30px 15px;
    }

    &:hover {
      height: 460px;
      background: linear-gradient(rgba(22, 74, 115, .9), rgba(22, 74, 115, .9));

      @media (max-width: 768px) {
        margin: 30px 15px;
      }
      
      .content {
        margin-top: -60px;
        opacity: 1;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
        visibility: visible;
      }

      .imgBox {
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
        top: -6px;
      }

      .tipo {
        color: rgba(22, 74, 115, .9);
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
        visibility: hidden;
      
        &__comentario {
          transition: 0.3s ease-in-out;
          transition-delay: 0.3s;
          visibility: hidden;
        }
      }

    }

    .imgBox {
      
      display: flex;
      height: 260px;
      justify-content: center;
      position: relative;
      top: -45px;
      transition: 0.3s ease-in-out;
      transition-delay: 0.3s;
      z-index: 1;
      
      &__image {
        border-radius: 6px;
        max-width: 100%;
      }
      
    }

    .content {
      border: 0px solid rgba(22, 74, 115, 1);
      color: #eee;
      margin-top: -54px;
      opacity: 0;
      padding: 0px;
      position: relative;
      text-align: center;
      transition: 0.3s ease-in-out;
      transition-delay: 0.3s;
      visibility: hidden;
      width: 100%;

      &__tittle {
        padding-top: 6px;
        padding-bottom: 3px;
      }

      &__description {
        font-size: 14px;
        padding: 6px 0px;
      }

      &__local {
        font-size: 14px;
        padding-top: 6px 0;
        padding-bottom: 21px;
      }
    }


    .tipo {
      color: #eee;
      font-size: 18px;
      margin-top: 9px;
      text-align: center;
      transition: 0.3s ease-in-out;
      transition-delay: 0.3s;
    
      &__comentario {
        color: #eee;
        font-size: 12px;
        margin-top: 18px;
        text-align: center;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
      }
    }


    .nav__link {
      background-color: rgba(255, 255, 255, .01);
      color: #164A73; // rgba(227, 189, 20, 1); Dourado
      width: 90vw;
      padding: 12px;


      &:hover {
        background-color: rgba(255, 255, 255, .01);
        border-radius: 9px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

