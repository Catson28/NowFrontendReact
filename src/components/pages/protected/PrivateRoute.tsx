import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthService from "../../../services/net/auth.service";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const currentUser = AuthService.getCurrentUser();
  const location = useLocation();

  // if (!currentUser) {
  //   // Redireciona para a tela de login, passando a URL de origem
  //   return <Navigate to={`/login?from=${location.pathname}`} />;
  // }

  return currentUser ? (
    <>{element}</>
  ) : (
    // <Navigate to="/login" state={{ from: location }} replace />
    <Navigate to={`/login?from=${location.pathname}`} />
  );
};

export default PrivateRoute;
