import styled from 'styled-components';
import Header from "../partials/Header";
import SectionCreateSolicit from "../partials/SectionCreateSolicit";
import SectionTopics from "../partials/SectionTopics";
import SectionMVV from "../partials/SectionMVV";
import SectionTeam from "../partials/SectionTeam";
import ServiceDevelopment from "../partials/ServiceDevelopment";
import ServiceMediaManagement from "../partials/ServiceMediaManagement";
import SectionPortfolio from "../partials/SectionPortfolio";
import Testimonial from "../partials/Testimonial";
import Contact from "../partials/Contact";
import Footer from "../partials/Footer";
import CookieComponent from "../partials/CookieComponent";


const BodyStyles = styled.body`
  background-image: url('/Layer9.png');
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
  return(
        <BodyStyles>
            <Header/>
            <SectionCreateSolicit/>
            <SectionTopics/>
            <SectionMVV/>
            <SectionTeam/>
            <ServiceDevelopment/>
            <ServiceMediaManagement/>
            <SectionPortfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>  
            <CookieComponent/>       
        </BodyStyles>
    ) 
};

export default HomePage;