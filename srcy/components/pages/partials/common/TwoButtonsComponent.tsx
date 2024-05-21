import React from 'react';
import styled from 'styled-components';

// Estilos para o botão outline
const OutlineButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #007bff;
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  min-width: 150px;
  

  @media screen and (max-width: 767px) {
    width: 80%;
  }
  
  @media screen and (max-width: 479px) {
    width: 80%;
  }
`;

// Estilos para o botão padrão
const RegularButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  min-width: 150px;
  

  @media screen and (max-width: 767px) {
    width: 80%;
  }
  
  @media screen and (max-width: 479px) {
    width: 80%;
  }
`;

const Twobuttons = styled.button`
  display: flex;

  @media screen and (max-width: 767px) {
    justify-content:center;
    display: block;
  }
  
  @media screen and (max-width: 479px) {
    display: block;
    justify-content:center;
  }
`;
const TwoButtonsComponent: React.FC = () => {
  return (
    <div>
      <RegularButton>Registar-se</RegularButton>
      <OutlineButton>Entrar</OutlineButton>
    </div>
  );
};

export default TwoButtonsComponent;
