import Lixo_1_Page from '../../components/pages/Home/Lixo_1_Page';
import HomePage from '../../components/pages/Home/HomePage';




import ProjectPage from '../../components/pages/Home/ProjectPage';
import ServicePage from '../../components/pages/Home/ServicePage';
import AboutPage from '../../components/pages/Home/AboutPage';
import ContactPage from '../../components/pages/Home/ContactPage';
import RegisterPage from '../../components/pages/Home/RegisterPage';
import LoginPage from '../../components/pages/Home/LoginPage';
import PainterPage from '../../components/pages/Home/PainterPage';
import ElectricianPage from '../../components/pages/Home/ElectricianPage';
import HousekeeperPage from '../../components/pages/Home/HousekeeperPage';

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
];

export default HomeRoutes;
