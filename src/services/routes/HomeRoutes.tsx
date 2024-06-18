import Lixo_1_Page from '../../components/partials/HomePartial/eliminar/Lixo_1_Page';
import HomePage from '../../components/pages/Home/HomePage';
import React from 'react'


import ProjectPage from '../../components/pages/Home/ProjectPage';
import ServicePage from '../../components/pages/Home/ServicePage';
import AboutPage from '../../components/pages/Home/AboutPage';
import AclPage from '../../components/pages/Home/AclPage';
import ContactPage from '../../components/pages/Home/ContactPage';
import RegisterPage from '../../components/pages/Home/RegisterPage';
import LoginPage from '../../components/pages/Home/LoginPage';
import PainterPage from '../../components/pages/Home/PainterPage';
import ElectricianPage from '../../components/pages/Home/ElectricianPage';
import HousekeeperPage from '../../components/pages/Home/HousekeeperPage';


import Home from '../../components/pages/Home/Home';
import Login from '../../components/pages/Home/Login';
import Register from '../../components/pages/Home/Register';
import Profile from '../../components/pages/Home/Profile';
import BoardUser from '../../components/pages/Home/BoardUser';
import BoardModerator from '../../components/pages/Home/BoardModerator';
import BoardAdmin from '../../components/pages/Home/BoardAdmin';

const HomeRoutes = [
  {
    path: '/lixo',
    element: <Lixo_1_Page />,
  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/service',
    element: <ServicePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/entrar',
    element: <LoginPage />,
  },
  {
    path: '/pintor',
    element: <PainterPage />,
  },
  {
    path: '/eletricista',
    element: <ElectricianPage />,
  },
  {
    path: '/diarista',
    element: <HousekeeperPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/user',
    element: <BoardUser />,
  },
  {
    path: '/mod',
    element: <BoardModerator />,
  },
  {
    path: '/admin',
    element: <BoardAdmin />,
  },
  {
    path: '/level',
    element: <AclPage />,
  }
];

export default HomeRoutes;
