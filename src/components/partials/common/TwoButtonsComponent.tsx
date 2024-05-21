import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Estilos para o botão outline
const OutlineButton = styled.button`
  padding: 10px 25px;
  border: 2px solid #0009FF;
  background-color: transparent;
  color: #0009FF;
  cursor: pointer;
  border-radius: 15px;
  margin: 10px;
  min-width: 150px;
  transition: .2s;
  
  &:hover {
    transform: scale(1.05);
  }
  

  @media screen and (max-width: 767px) {
    width: 80%;
  }
  
  @media screen and (max-width: 479px) {
    width: 80%;
  }
`;

// Estilos para o botão padrão
const RegularButton = styled.button`
  padding: 12px 25px;
  background-color: #0009FF;
  color: #fff;
  cursor: pointer;
  border-radius: 15px;
  // margin: 10px;
  min-width: 150px;
  transition: .2s;
  
  &:hover {
    transform: scale(1.05);
    background-color: #FFF600;
    color: #0009FF;  
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
  
  @media screen and (max-width: 479px) {
    width: 80%;
  }
`;

const Twobuttons = styled.button`
  display: flex;
  margin: 2rem 0 0 0;

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
      <Link to="/register">
        <RegularButton>Registar-se</RegularButton>
      </Link>
      <Link to="/entrar">
        <OutlineButton>Entrar</OutlineButton>
      </Link>
    </div>
  );
};

export default TwoButtonsComponent;
