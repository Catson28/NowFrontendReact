import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from "../Header";
import ExampleFontePage from "../../../pages/Fonte/ExampleFontePage";
import SectionRegister from "../SectionRegister";
import SectionServico from "../SectionServico";
import SectionMVV from "../SectionManMoney";
import SectionTeam from "../SectionTeam";
import ServiceDevelopment from "../ServiceDevelopment";
import ServiceMediaManagement from "../ServiceMediaManagement";
import SectionPortfolio from "../SectionPortfolio";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Footer from "../Footer";
import CookieComponent from "../CookieComponent";
import Titulo800 from '../Typography/Titulo800'

import { Container, Flex, GlobalStyles, Box } from '../../../../services/styles/Global'
import { theme } from '../../../../services/styles/Theme'


const BodyStyles = styled.body`

//   background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  font-family: Arial, sans-serif;
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


  return(
    <ThemeProvider theme={theme}>
        <BodyStyles>
            <Header homeHeader={handleHeightHeader}/>
            <SectionRegister homeheightHeader={heightHeader}/>
            <SectionServico/>
            <SectionMVV/>
            {/* <SectionTeam/>
            <ServiceDevelopment/>
            <ServiceMediaManagement/>
            <SectionPortfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>  
            <CookieComponent/>        */}
        </BodyStyles>
      <GlobalStyles />
      <Titulo800 />
    </ThemeProvider>
    ) 
};


export default HomePage;


