import { ChangeEvent, FormEvent, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'


import Navbar from '../../partials/HomePartial/Navbar'
import { theme } from '../../../services/styles/Theme'
import { Container, Flex, GlobalStyles, Box } from '../../../services/styles/Global'
import SectionRegister from "../../partials/HomePartial/SectionRegister";
import SectionServico from "../../partials/HomePartial/SectionServico";
import SectionManMoney from "../../partials/HomePartial/SectionManMoney";




const BodyStyles = styled.body`
  background-image: url('/Layer9.png');
//   background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  color: #1b2f5a;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const HomePage = () => {  
  const [heightHeader, setHeightHeader]  = useState<number>(0);

  const handleHeightHeader = (value: number) => {
    setHeightHeader(value);
  };



  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BodyStyles>
            <Navbar  homeHeader={handleHeightHeader} />
            <SectionRegister homeheightHeader={heightHeader}/>
            <SectionServico/>
            <SectionManMoney/>
        </BodyStyles>
    </ThemeProvider>
  )
}

export default HomePage
