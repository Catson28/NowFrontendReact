import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownMenuProps {
  handleOpen: boolean;
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

const List = styled.ul<{ isOpen: boolean }>` 
  position:absolute;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index:5;
  display: ${(props) => (props.isOpen ? 'block' : 'block')};
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: #fff600;
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({ handleOpen }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <Container>
      <List isOpen={handleOpen}>
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Servicos</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Sobre nós</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contactos</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default DropdownMenu;