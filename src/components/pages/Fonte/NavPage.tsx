// NavPage.tsx
import React from 'react';
import Navbar from '../../partials/HomePartial/eliminar/Navbar';
import MainContent from '../../partials/HomePartial/eliminar/MainContent';

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
