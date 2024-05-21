import styled, { keyframes } from 'styled-components';

// Definindo a animação
const showData = keyframes`
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(-7rem);
  }
`;

// Componente Styled
const CardData = styled.div<{ hover: boolean }>`
  width: 280px;
  background-color: var(--container-color);
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 1;
  transition: opacity 1s 1s;

  /* Adicionando a animação no hover */
  ${props =>
    props.hover &&
    `
    animation: ${showData} 1s forwards;
    opacity: 1;
    transition: opacity .3s;
  `}

  /* Adicionando a animação quando não estiver em hover */
  ${props =>
    !props.hover &&
    `
    animation: remove-data 1s forwards;
  `}
`;

// Exportando o componente
export default CardData;
