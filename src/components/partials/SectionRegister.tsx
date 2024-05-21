// src/SectionRegister.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Container } from '../../services/styles/Global'
import TwoButtonsComponent from './common/TwoButtonsComponent';
import { device } from '../../services/styles/BreakPoints'

interface SectionRegisterProps {
    homeheightHeader: number;
}

const Raw = styled.div<{ homeheightHeader: number }>`
opacity: 1;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transition: opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
// justify-content: space-around;
justify-content: space-between;
height: calc(100vh - ${({ homeheightHeader }) => homeheightHeader}px);
align-items:center;

// background-color:yellow;

@media ${device.md} {
  display: flex;
}

@media ${device.sm} {
  display: block;
}
`;

const Content = styled.div`
  max-width:600px;
  margin: 4rem 0 0 0;
  display: block;
  unicode-bidi: isolate;
  text-align: left;
  align-items:center;

  @media ${device.md} {
    max-width:400px;
    // text-align: center;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;


  }
  @media ${device.sm} {

  }
`;

const Paragraph = styled.p`
  margin: 2rem 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
  font-size: 30px;

  @media ${device.md} {
    font-size: 20px;
  }
`;

const Image = styled.div`
display: flex;
unicode-bidi: isolate;
height:100%;
align-items:flex-end;


width: 100%;
padding-top: 56.25%; /* relação de aspecto de 16:9, ajuste conforme necessário */
position: relative;
overflow: hidden;

`;



const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* ou 'contain' */
  
  @media ${device.sm} {
    width: 100vh;
    height: 100vh;

  }
`;


const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.aristaPro}, sans-serif;
  font-size: 60px;
  font-weight: 500;
  color:blue;

  @media ${device.md} {
    font-size: 40px;
  }
  
  @media ${device.sm} {
  }
`



const BannerSection = styled.div`

@media ${device.md} {
  width:100%;
  text-align: center;

  display: block;
  flex-wrap: wrap;
  justify-content: center;


}
`;

const SectionRegister: React.FC<SectionRegisterProps> = ({ homeheightHeader }) => {
  return (
    <BannerSection>
      <Container>
        <Raw homeheightHeader={homeheightHeader}>
          <Content>
            {/* <ExampleFontePage />  */}

              
            <H1>Na ponta dos dedos, serviços sem segredos!</H1>           

            <Paragraph>Agora é fácil encontrar varios serviços num clique na primeira plataforma em Angola que oferece serviços pontuais.</Paragraph>
            <TwoButtonsComponent />
          </Content>
          <Image>
              <CardImage src="/Layer4.png" alt="Service Image" />
          </Image>
        </Raw>
      </Container>

    </BannerSection>
  );
};

export default SectionRegister;
    