import { RouteProps } from 'react-router-dom';
import React from 'react';
import HomeRoutes from '../HomeRoutes';
import FontsRoutes from '../FontsRoutes';

// import outros arquivos de rota conforme necessário

interface RouteConfigBase {
  path: string;
  element: React.ReactNode;
}

type RouteConfig = RouteProps & RouteConfigBase;

const routes: RouteConfig[] = [
  ...HomeRoutes,
  ...FontsRoutes,
];

export default routes;
