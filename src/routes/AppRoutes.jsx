import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/RouteWrapper/MainLayout";
import { SignUpForm } from "../components/AuthForm/SignUpForm";
import { SignInForm } from "../components/AuthForm/SignInForm";
import { PrivateAuthRoute } from "./Private/PrivateAuthRoute";
import { AdminRoutes } from "./AdminRoutes";

export const AppRoutes = ({ isAuthorized, role }) => {
  console.log(role);

  const pathsByRole = {
    ADMIN: "/admin",
    CLIENT: "/client",
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"sign-up"} />} />
        <Route
          path="sign-up"
          element={
            <PrivateAuthRoute
              RouteComponent={<SignUpForm />}
              fallbackPath={pathsByRole[role]}
              isAuthorized={!isAuthorized}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <PrivateAuthRoute
              RouteComponent={<SignInForm />}
              fallbackPath={pathsByRole[role]}
              isAuthorized={!isAuthorized}
            />
          }
        />
      </Route>
      <Route
        path="/admin/*"
        element={
          <PrivateAuthRoute
            RouteComponent={<AdminRoutes role={role} />}
            fallbackPath={"/sign-in"}
            isAuthorized={isAuthorized}
          />
        }
      />
      <Route path="/client/*" element={<h1>Client Page</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
