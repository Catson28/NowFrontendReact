import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../../services/styles/BreakPoints'

// Estilos para o botão outline
const OutlineButton = styled.button`
  padding: 10px 25px;
  border: 2px solid #0009FF;
  background-color: transparent;
  color: #0009FF;
  cursor: pointer;
  border-radius: 15px;
  min-width: 150px;
  transition: .2s;
  margin: 0 10px;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media ${device.sm} {
    padding: 15px 30px;
    border-radius: 25px;
    min-width: 100px;
  }
`;

// Estilos para o botão padrão
const RegularButton = styled.button`
  padding: 12px 25px;
  background-color: #0009FF;
  color: #fff;
  cursor: pointer;
  border-radius: 15px;
  margin: 0 10px;
  min-width: 150px;
  transition: .2s;
  
  &:hover {
    transform: scale(1.05);
    background-color: #FFF600;
    color: #0009FF;  
  }
  
  @media ${device.sm} {
    padding: 15px 30px;
    border-radius: 25px;
    min-width: 100px;
  }
`;

const Twobuttons = styled.div`
  
  @media ${device.sm} {
  display: flex;
  justify-content: space-between;
  }
`;
const TwoButtonsComponent: React.FC = () => {
  return (
    <Twobuttons>
      <Link to="/register">
        <RegularButton>Registar-se</RegularButton>
      </Link>
      <Link to="/login">
        <OutlineButton>Entrar</OutlineButton>
      </Link>
    </Twobuttons>
  );
};

export default TwoButtonsComponent;
