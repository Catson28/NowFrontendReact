import { RouteProps } from 'react-router-dom';
import React from 'react';
import HomeRoutes from '../HomeRoutes';

// import outros arquivos de rota conforme necessário

interface RouteConfigBase {
  path: string;
  element: React.ReactNode;
}

type RouteConfig = RouteProps & RouteConfigBase;

const routes: RouteConfig[] = [
  ...HomeRoutes,
];

export default routes;
