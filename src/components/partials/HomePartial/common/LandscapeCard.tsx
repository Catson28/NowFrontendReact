import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'

import { device } from '../../../../services/styles/BreakPoints'
import { Container } from '../../../../services/styles/Global'

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
  justify-content: space-between;
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
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  text-decoration: none;
  margin-inline: auto;
  background-color: #FFF600;
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

const H2 = styled.h2`
  text-decoration: none;
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





const LandContainer = styled(Container)`
  @media ${device.md} {
    display: flex;
    justify-content: center;
    align-items: center;
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
      <LandContainer>
        <CardContainer>
          <CardArticle onMouseEnter={() => setPintorHover(true)} onMouseLeave={() => setPintorHover(false)}>
            <CardImage src="/pintor.jpg" alt="image" />
            <Link to="/pintor">
              <CardData hover={pintorhover}>
                <H2>Pintor</H2>                
              </CardData>
            </Link>
          </CardArticle>

          <CardArticle onMouseEnter={() => setEletricHover(true)} onMouseLeave={() => setEletricHover(false)}>
            <CardImage src="/eletricista.jpg" alt="image" />
            {/* <CardImage src="/landscape-1.png" alt="image" /> */}
            <Link to="/eletricista">
              <CardData hover={eletrichover}>
                <H2>Eletricista</H2>     
              </CardData>
            </Link>

          </CardArticle>

          <CardArticle onMouseEnter={() => setDomesticHover(true)} onMouseLeave={() => setDomesticHover(false)}>
            <CardImage src="/empregada_3.jpg" alt="image" />
              <Link to="/diarista">
                <CardData hover={domestichover}>
                  <H2>Diarista</H2>   
                </CardData>
              </Link>
          </CardArticle>
        </CardContainer>
      </LandContainer>
    </StyledCardComponent>
  );
};

export default LandscapeCard;
