import React, { useState } from 'react';
import styled from 'styled-components';

interface NavbarComponentProps {
  handleButtonOpen: () => void;
}

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 24px;

  @media screen and (max-width: 767px) {
    display: flex;
  }

  @media screen and (max-width: 479px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const ToggleMenuButton = ({ handleButtonOpen }: NavbarComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // handleButtonOpen();
  };

  return (
    <ToggleButton onClick={() => {
      toggleMenu();
      handleButtonOpen();
    }}>
      <Bar style={{ transform: isOpen ? 'rotate(-405deg) translate(-5px, 6px)' : 'none' }} />
      <Bar style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? 'scale(0)' : 'scale(1)' }} />
      <Bar style={{ transform: isOpen ? 'rotate(405deg) translate(-5px, -6px)' : 'none' }} />
    </ToggleButton>
  );
};

export default ToggleMenuButton;
