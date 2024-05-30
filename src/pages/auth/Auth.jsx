import { Navigate, Outlet } from "react-router-dom";

function Auth() {
  const user = localStorage.getItem("token");

  return user ? <Outlet /> : <Navigate replace to="/login" />;
}

export default Auth;
