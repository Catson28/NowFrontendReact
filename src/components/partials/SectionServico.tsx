// src/App.tsx
import React from 'react';
import styled from 'styled-components'
import LandscapeCard from './common/LandscapeCard';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.aristaPro}, sans-serif;
  font-size: 60px;
  font-weight: 800;
  color:blue;
  padding: 2rem 0 2rem 0;
`




const BannerCreate = styled.div`
  background-color: #f0eaea57;
  padding: 0 0 2rem 0;
`;

const SectionServico: React.FC = () => {
  return (
    <BannerCreate>
      <H1>Aqui tem!</H1>
      <LandscapeCard />
    </BannerCreate>
  );
};

export default SectionServico;
