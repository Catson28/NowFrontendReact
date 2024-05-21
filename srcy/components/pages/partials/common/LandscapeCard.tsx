import React, { useState } from 'react';
// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';
// import CardData from './utils/CardData'; // Importe o componente


// Container styles
const Container = styled.div`
  display: grid;
  place-items: center;
  margin: 0 1.5rem;
  padding: 5rem 0;
  @media screen and (max-width: 340px) {
      margin-inline: 1rem;
  }

  @media screen and (min-width: 1120px) {
    height: 100vh;
  }
`;

// Estilos específicos para o componente completo
const StyledCardComponent = styled.div`
--container-color: #ffffff; /* Ou qualquer outra cor desejada */
  /* Adicione aqui estilos específicos para o componente completo, se necessário */











  
  
  
  /* Naming animations in hover */
  .card__article:hover .card__data {
    animation: show-data 1s forwards;
    opacity: 1;
    transition: opacity .3s;
  } 

  .card__article:not(:hover) .card__data {
    animation: remove-data 1s forwards;
  }
`;

// Card container styles
const CardContainer = styled.div`
  display: grid;
  row-gap: 3.5rem;
  // row-gap: 2.5rem;

  /* For medium devices */
  @media screen and (min-width: 768px) {
      display: flex;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.5rem;
  }

  @media screen and (min-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Define keyframes for animations
const showData = keyframes`
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(-7rem);
  }
`;

const removeData = keyframes`
  0% {
    transform: translateY(-7rem);
  }
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(.5rem);
  }
`;

// Your other styles and components remain the same

const CardData = styled.div<{ hover: boolean }>`
  background-color: var(--container-color);
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
  animation: ${({ hover }) => (hover ? showData : removeData)} 1s forwards;
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  transition: opacity 0.3s;
  // width: 280px;




  
  @media screen and (max-width: 340px) {
    width: 150px;
    // width: 250px;
      padding: 1rem;
  }
    
  @media screen and (min-width: 1120px) {
    // width: 316px;
    width: 216px;
    padding-inline: 2.5rem;
  }
`;

// Card article styles
const CardArticle = styled.article`
  position: relative;
  overflow: hidden;

  &:hover {
    .card__data {
      animation: show-data 1s forwards;
      opacity: 1;
      transition: opacity .3s;
    }
    animation: remove-overflow 2s forwards;
  }

  &:not(:hover) {
    animation: show-overflow 2s forwards;
  }

  &:not(:hover) .card__data {
    animation: remove-data 1s forwards;
  }
`;

// Card image styles
const CardImage = styled.img`
  width: 328px;
  border-radius: 1.5rem;
  
  @media screen and (min-width: 1120px) {
    width: 348px;
  }
`;

// Keyframes for animations
const Keyframes = styled.div`
  @keyframes show-data {
    50% {
      transform: translateY(-10rem);
    }
    100% {
      transform: translateY(-7rem);
    }
  }

  @keyframes remove-overflow {
    to {
      overflow: initial;
    }
  }

  @keyframes remove-data {
    0% {
      transform: translateY(-7rem);
    }
    50% {
      transform: translateY(-10rem);
    }
    100% {
      transform: translateY(.5rem);
    }
  }

  @keyframes show-overflow {
    0% {
      overflow: initial;
      pointer-events: none;
    }
    50% {
      overflow: hidden;
    }
  }
`;

// Component
const LandscapeCard = () => {
  const [eletrichover, setEletricHover] = useState(false);
  const [pintorhover, setPintorHover] = useState(false);
  const [domestichover, setDomesticHover] = useState(false);

  return (
    <StyledCardComponent>
      <Keyframes />
      <Container>
        <CardContainer>
          <CardArticle onMouseEnter={() => setPintorHover(true)} onMouseLeave={() => setPintorHover(false)}>
            <CardImage src="/pintor.jpg" alt="image" />
            <CardData hover={pintorhover}>
              <a href="#" className="card__button"><h2 className="card__title"><span className="card__description">Pintor</span></h2></a>
            </CardData>
          </CardArticle>

          <CardArticle onMouseEnter={() => setEletricHover(true)} onMouseLeave={() => setEletricHover(false)}>
            <CardImage src="/eletricista.jpg" alt="image" />
            {/* <CardImage src="/landscape-1.png" alt="image" /> */}
            <CardData hover={eletrichover}>
              <a href="#" className="card__button"><h2 className="card__title"><span className="card__description">Pintor</span></h2></a>
            </CardData>
          </CardArticle>

          <CardArticle onMouseEnter={() => setDomesticHover(true)} onMouseLeave={() => setDomesticHover(false)}>
            <CardImage src="/domestica.jpg" alt="image" />
            <CardData hover={domestichover}>
              <a href="#" className="card__button"><h2 className="card__title"><span className="card__description">eletricista</span></h2></a>
            </CardData>
          </CardArticle>
        </CardContainer>
      </Container>
    </StyledCardComponent>
  );
};

export default LandscapeCard;
