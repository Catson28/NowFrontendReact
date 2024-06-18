import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from '../../partials/HomePartial/Navbar'
import { theme } from '../../../services/styles/Theme'
import { Container, Flex, GlobalStyles, Box } from '../../../services/styles/Global'




const BodyStyles = styled.body`

//   background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  color: #1b2f5a;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.aristaPro}, sans-serif;
  font-size: 60px;
  font-weight: 800;
  color:blue;
  padding: 2rem 0 2rem 0;
`

const AboutPage: React.FC = () => {  
  const [heightHeader, setHeightHeader]  = useState<number>(0);

  const handleHeightHeader = (value: number) => {
    setHeightHeader(value);
  };



  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BodyStyles>
          <Navbar  homeHeader={handleHeightHeader} />
          <H1>Sobre nos</H1>
        </BodyStyles>
    </ThemeProvider>
  )
}

export default AboutPage
