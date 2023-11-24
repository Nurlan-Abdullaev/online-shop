import { useEffect, useState } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/slices/authSlice";
import { CircularProgress } from "@mui/material";

function App() {
  const { isAuthourizated, data } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedData = JSON.parse(localStorage.getItem("clientData"));
    if (storagedData?.token && storagedData?.role) {
      dispatch(authActions.autoLogin(storagedData));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return <AppRoutes isAuthorized={isAuthourizated} role={data.role} />;
}

export default App;
