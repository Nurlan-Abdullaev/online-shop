import { Navigate } from "react-router-dom";

export const PrivateAuthRoute = ({ 
  RouteComponent,
  isAuthorized,
  fallbackPath,
}) => {
  if (isAuthorized) {
    return RouteComponent;
  }

  return <Navigate to={fallbackPath} replace />;
};
