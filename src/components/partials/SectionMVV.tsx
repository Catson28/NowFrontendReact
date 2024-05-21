// src/App.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import { Container } from '../../services/styles/Global'
import TwoButtonsComponent from './common/TwoButtonsComponent';

const Raw = styled.div`
opacity: 1;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;
display: -webkit-box;
// display: -ms-flexbox;
display: flex;
justify-content: space-between;
`;

const Content = styled.div`
  max-width:600px;
  margin: 4rem 0 0 0;
  display: block;
  unicode-bidi: isolate;
  font-family: ${({ theme }) => theme.fonts.aristaPro}, sans-serif;
  text-align: left;
`;

const Paragraph = styled.p`
  margin: 4rem 0 0 0;
  font-size: 1rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
  
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const Image = styled.div`
display: block;
unicode-bidi: isolate;
height:100%;
align-items:flex-end;
`;

const CardImage = styled.img`
  height: 33rem;
`;

const H1 = styled.h1`
font-family: ${({ theme }) => theme.fonts.aristaPro}, sans-serif;
font-size: 50px;
font-weight: 700;
`


const BannerCreate = styled.div`
  background-image: url(/leds.png);
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  background-size: contain;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;


const SectionMVV: React.FC = () => {
  return (
    <BannerCreate>
      <Container>
        <Raw>
          <Image>
            <CardImage src="/admirado2.png" alt="Service Image" />
          </Image>
          <Content>              
            <H1>Sem patrão, sem salário, mas com grandes ganhos!</H1>           
            <Paragraph>Não perca tempo, inicie agora mesmo sua jornada para alcançar diversos clientes e aumentar seus ganhos em Kwanzas semanalmente. Clique no botão e comece a transformar sua carreira hoje!</Paragraph>
            <TwoButtonsComponent />
          </Content>
        </Raw>
      </Container>
    </BannerCreate>
  );
};

export default SectionMVV;

