import { Navigate } from "react-router-dom";

export const PrivateAuthRouteByRole = ({ // HOC
  RouteComponent,
  role, // login role // CLIENT
  roles = [], // ["ADMIN"] ADMIN === CLIENT
  fallbackPath,
}) => {
  if (roles.includes(role)) {
    return RouteComponent;
  }

  return <Navigate to={fallbackPath} replace />;
};
