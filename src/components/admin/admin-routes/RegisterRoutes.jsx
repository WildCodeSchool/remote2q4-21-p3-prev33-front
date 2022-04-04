import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../contexts/UserProvider";

const RegisterRoutes = () => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default RegisterRoutes;
