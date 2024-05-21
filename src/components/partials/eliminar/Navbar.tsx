// Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <div>Menu</div>
    </NavbarContainer>
  );
};

export default Navbar;
