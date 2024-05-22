import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties; // Adiciona a propriedade style opcional
}

const StyledContainer = styled.div<ContainerProps>`
  width: 90%;
  margin: 0 auto; /* Centraliza o container */
  /* Adiciona os estilos personalizados */
  background-color: ${(props) => props.style?.backgroundColor || 'transparent'};
  justify-content: ${(props) => props.style?.justifyContent || 'initial'};

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    // margin: 0; /* Remove a margem para ocupar toda a largura */
  }

  @media screen and (max-width: 479px) {
    width: 95%;
  }
`;

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};

export default Container;


// Uso:
// <Container>Conteúdo Responsivo</Container>;

// Ou
// <Container style={{ backgroundColor: 'black', justifyContent: 'center' }}>
//   Conteúdo Responsivo
// </Container>
