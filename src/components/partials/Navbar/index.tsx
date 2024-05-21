import React, { useState, useRef, useEffect } from 'react';
import { Hamburger, Logotipo } from '../../../services/config/icons'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../../services/styles/BreakPoints'

interface NavElementsProps {
  showNavbar: boolean
}

interface NavbarProps {
  homeHeader: (value: number) => void;
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const NavStyle = styled.nav`
  height: 60px;
  // background-color: #fef7e5;
  position: relative;
`

const MenuIcon = styled.div`
  display: none;
  @media ${device.md} {
    display: block;
    cursor: pointer;
  }
`

const NavElements = styled.div<NavElementsProps>`
  @media ${device.md} {
    position: absolute;
    right: 0;
    top: 60px;
    background-color: #fef7e5;
    height: calc(100vh - 60px);
    transition: all 0.3s ease-in;
    overflow: hidden;
    width: ${({ showNavbar }) => (showNavbar ? '270px' : '0')};
    z-index: 2;
    ul {
      display: flex;
      flex-direction: column;
      li {
        margin-right: unset;
        margin-top: 22px;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
  ul li:not(:last-child) {
    margin-right: 60px;
    @media ${device.md} {
      margin-right: 30px;
    }
  }
  ul a {
    font-size: 16px;
    font-weight: 400;
    color: #2f234f;
    text-decoration: none;
  }
  ul a.active {
    color: #574c4c;
    font-weight: 500;
    position: relative;
  }
  ul a.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }
`

const Navbar: React.FC< NavbarProps > = ({ homeHeader }) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (navRef.current) {
          console.log('Altura do Navbar:', navRef.current.offsetHeight);
          homeHeader(navRef.current.offsetHeight);
      }
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <NavStyle>
      <Container  ref={navRef}>
        <div>
          <Logotipo />
        </div>
        <MenuIcon onClick={handleShowNavbar}>
          <Hamburger />
        </MenuIcon>
        <NavElements
          showNavbar={showNavbar}
          className={showNavbar ? 'active' : undefined}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Serviços</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
          </ul>
        </NavElements>
      </Container>
    </NavStyle>
  )
}

export default Navbar

