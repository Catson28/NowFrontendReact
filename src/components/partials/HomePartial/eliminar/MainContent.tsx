// MainContent.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';

interface MainContentProps {
  children: ReactNode;
}

const MainContentContainer = styled.div<{ navbarHeight: number }>`
  width: 100%;
  height: calc(100vh - ${({ navbarHeight }) => navbarHeight}px);
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
`;

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.clientHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainContentContainer navbarHeight={navbarHeight}>
      {children}
    </MainContentContainer>
  );
};

export default MainContent;
