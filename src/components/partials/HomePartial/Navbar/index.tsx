import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../services/styles/BreakPoints";
import { Hamburger, Logotipo } from "../../../../services/config/icons";
import AuthService from "../../../../services/net/auth.service";

import EventBus from "../../../../services/common/EventBus";

interface NavElementsProps {
  showNavbar: boolean;
}

interface NavbarProps {
  homeHeader: (value: number) => void;
}

interface IUser {
  username: string;
  role: string;
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const NavStyle = styled.nav`
  height: 60px;
  position: relative;
  @media ${device.md} {
    background-color: #fff600;
    z-index: 2;
    width: 100%;
    position: fixed;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media ${device.md} {
    display: block;
    cursor: pointer;
  }
`;

const NavElements = styled.div<NavElementsProps>`
  @media ${device.md} {
    position: fixed;
    right: 0;
    top: 60px;
    background-color: #fff600;
    height: calc(100vh - 60px);
    transition: all 0.3s ease-in;
    overflow: hidden;
    width: ${({ showNavbar }) => (showNavbar ? "270px" : "0")};
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
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ homeHeader }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.role === "ROLE_MODERATOR");
      setShowAdminBoard(user.role === "ROLE_ADMIN");

      EventBus.on("logout", logOut);

      return () => {
        EventBus.remove("logout", logOut);
      };
    }
  });

  useEffect(() => {
    if (navRef.current) {
      console.log("Altura do Navbar:", navRef.current.offsetHeight);
      homeHeader(navRef.current.offsetHeight);
    }
  }, [homeHeader]);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <NavStyle>
      <Container ref={navRef}>
        <div>
          <Logotipo />
        </div>
        <MenuIcon onClick={handleShowNavbar}>
          <Hamburger />
        </MenuIcon>
        <NavElements
          showNavbar={showNavbar}
          className={showNavbar ? "active" : undefined}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/level">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {showModeratorBoard && (
              <li>
                <Link to="/mod">Moderator Board</Link>
              </li>
            )}
            {showAdminBoard && (
              <li>
                <Link to="/admin">Admin Board</Link>
              </li>
            )}
            {currentUser && (
              <>
                <li>
                  <Link to="/profile">{currentUser.username}</Link>
                </li>
                <li>
                  <a href="/login" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </>
            )}
            {!currentUser && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </NavElements>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
