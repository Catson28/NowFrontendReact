// NavPage.tsx
import React from 'react';
import Navbar from '../../partials/eliminar/Navbar';
import MainContent from '../../partials/eliminar/MainContent';

const NavPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <h1>Conteúdo Principal</h1>
        <p>Este é o conteúdo principal da página.</p>
      </MainContent>
    </>
  );
};

export default NavPage;
