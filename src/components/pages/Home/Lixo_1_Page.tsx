import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from "../../partials/HomePartial/Header";
import ExampleFontePage from "../Fonte/ExampleFontePage";
import SectionRegister from "../../partials/HomePartial/SectionRegister";
import SectionServico from "../../partials/HomePartial/SectionServico";
import SectionMVV from "../../partials/HomePartial/SectionManMoney";
import SectionTeam from "../../partials/HomePartial/SectionTeam";
import ServiceDevelopment from "../../partials/HomePartial/ServiceDevelopment";
import ServiceMediaManagement from "../../partials/HomePartial/ServiceMediaManagement";
import SectionPortfolio from "../../partials/HomePartial/SectionPortfolio";
import Testimonial from "../../partials/HomePartial/Testimonial";
import Contact from "../../partials/HomePartial/Contact";
import Footer from "../../partials/HomePartial/Footer";
import CookieComponent from "../../partials/HomePartial/CookieComponent";
import Titulo800 from '../../partials/HomePartial/Typography/Titulo800'

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


