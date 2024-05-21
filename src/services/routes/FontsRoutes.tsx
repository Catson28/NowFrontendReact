import FontePage from '../../components/pages/Fonte/FontePage';
import ExampleFontePage from '../../components/pages/Fonte/ExampleFontePage';
import NavPage from '../../components/pages/Fonte/NavPage';

const FontsRoutes = [
  {
    path: '/example',
    element: <ExampleFontePage />,
  },
  {
    path: '/fonte',
    element: <FontePage />,
  },
  {
    path: '/nav',
    element: <NavPage />,
  }
];

export default FontsRoutes;

