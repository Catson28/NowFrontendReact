import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from "../../partials/Header";
import ExampleFontePage from "../Fonte/ExampleFontePage";
import SectionRegister from "../../partials/SectionRegister";
import SectionServico from "../../partials/SectionServico";
import SectionMVV from "../../partials/SectionMVV";
import SectionTeam from "../../partials/SectionTeam";
import ServiceDevelopment from "../../partials/ServiceDevelopment";
import ServiceMediaManagement from "../../partials/ServiceMediaManagement";
import SectionPortfolio from "../../partials/SectionPortfolio";
import Testimonial from "../../partials/Testimonial";
import Contact from "../../partials/Contact";
import Footer from "../../partials/Footer";
import CookieComponent from "../../partials/CookieComponent";
import Titulo800 from '../../partials/Typography/Titulo800'

import { Container, Flex, GlobalStyles, Box } from '../../../services/styles/Global'
import { theme } from '../../../services/styles/Theme'


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


