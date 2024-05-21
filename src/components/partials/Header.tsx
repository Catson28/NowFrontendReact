// src/App.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarComponent from './common/NavbarComponent';
import DropdownMenu from './common/DropdownMenu';

interface HeaderProps {
  homeHeader: (value: number) => void;
}

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Header: React.FC< HeaderProps > = ({ homeHeader }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
        <NavbarComponent handleOpen={toggleMenu} homeHeader={homeHeader} />
        <DropdownMenu handleOpen={isOpen} />
    </div>
  );
};

export default Header;