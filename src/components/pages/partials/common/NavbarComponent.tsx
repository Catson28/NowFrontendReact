import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import ToggleMenuButton from './ToggleMenuButton';

interface DropdownMenuProps {
  open: boolean;
}

interface NavbarComponentProps {
  handleOpen: () => void;
}

const Nav = styled.nav`
    // background-color: #333;
    color: 000;
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 767px) {
      display: none;
    }
  
    @media screen and (max-width: 479px) {
      display: none;
    }
`;

const Li = styled.li`
    display: inline-block;
    position: relative;
`;

const Logo = styled.h1`
padding: 10px;
margin: 0;
`;

const A = styled.a`
    display: inline-block;
    color: black;
    text-decoration: none;
    padding: 15px;
    &:hover {
        background-color: red;
    }
`;

const DropdownMenu = styled.div<DropdownMenuProps>`
    position: absolute;
    // box-shadow: 0 0 2px black;
    display: none;
    ${Li}:hover & {
        display: block;
    }
    /* Exemplo de estilos para o DropdownMenu */
    background-color: #333;
    width: 150px; /* Defina a largura desejada */
    top: 100%; /* Posicione abaixo do pai */
    left: 0; /* Posicione alinhado à esquerda do pai */
`;

const DropdownLink = styled.a`
    display: block;
    color: White;
    text-decoration: none;
    padding: 15px;
    &:hover {
        background-color: red;
    }
`;

const NavbarComponent: React.FC<NavbarComponentProps> = ({ handleOpen }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <Nav>
            <Container style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex'  }}>
                <Logo>Logo</Logo>
                <Ul>
                    <Li>
                        <A href="">Home</A>
                    </Li>
                    <Li>
                        <A href="">Serviços</A>
                    </Li>
                    <Li>
                        <A onClick={toggleMenu}>Sobre Nós</A>
                        <DropdownMenu open={menuOpen}>
                            <DropdownLink href="">Serviço 1</DropdownLink>
                            <DropdownLink href="">Serviço 2</DropdownLink>
                            <DropdownLink href="">Serviço 3</DropdownLink>
                        </DropdownMenu>
                    </Li>
                    <Li>
                        <A href="">Contactos</A>
                    </Li>
                </Ul>
                <ToggleMenuButton handleButtonOpen={handleOpen} />
            </Container>
        </Nav>
    );
};

export default NavbarComponent;
