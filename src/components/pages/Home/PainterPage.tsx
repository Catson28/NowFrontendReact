import { ChangeEvent, FormEvent, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from '../../partials/Navbar'
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

const PainterPage = () => {  
  const [heightHeader, setHeightHeader]  = useState<number>(0);

  const handleHeightHeader = (value: number) => {
    setHeightHeader(value);
  };



  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BodyStyles>
            <Navbar  homeHeader={handleHeightHeader} />
        </BodyStyles>
    </ThemeProvider>
  )
}

export default PainterPage
