import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownMenuProps {
  handleOpen: boolean;
}

interface ListProps {
  isOpen: boolean;
}

const Container = styled.div`
  width: 100%;
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
  }

  @media screen and (max-width: 479px) {
    display: flex;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const List = styled.ul<ListProps>` 
  position: absolute;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: calc(100vh - 30px);
  background-color: #fff600;
  z-index: 5;
  display: ${(props) => (props.isOpen ? 'block' : 'block')};
  align-content: space-around;
  // align-content: space-between;
`;

const ListItem = styled.li<ListProps>`
  display: ${(props) => (props.isOpen ? 'list-item' : 'none')};
  padding: 2rem;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <List isOpen={handleOpen || isOpen}>
        <ListItem isOpen={handleOpen || isOpen}>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem isOpen={handleOpen || isOpen}>
          <Link href="#">Servicos</Link>
        </ListItem>
        <ListItem isOpen={handleOpen || isOpen}>
          <Link href="#">Sobre nós</Link>
        </ListItem>
        <ListItem isOpen={handleOpen || isOpen}>
          <Link href="#">Contactos</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default DropdownMenu;
