// src/SectionRegister.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Container } from '../../../services/styles/Global'
import TwoButtonsComponent from './common/TwoButtonsComponent';
import { device } from '../../../services/styles/BreakPoints'

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
  height: auto;
  display: flex;
  width: auto;
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
    max-width:300px;

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

  @media ${device.sm} {
    font-size: 20px;
    margin: 1rem 0 0.5rem 0;
  }
`;

const Image = styled.div`
display: flex;
unicode-bidi: isolate;
height:100%;
align-items:flex-end;


width: 100%;
// padding-top: 56.25%; /* relação de aspecto de 16:9, ajuste conforme necessário */
position: relative;
overflow: hidden;
  
  @media ${device.sm} {
    justify-content: center;
  }

`;



const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* ou 'contain' */
  
  @media ${device.md} {
    position: relative;
    width: 300px;
    height: 500px;
  }
  
  @media ${device.sm} {
    position: relative;
    width: 300px;
    height: 500px;
  }
`;



const RegisterContainer = styled(Container)`
  padding:0;
  @media ${device.md} {
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 31px;
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
      <RegisterContainer>
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
      </RegisterContainer>

    </BannerSection>
  );
};

export default SectionRegister;
    