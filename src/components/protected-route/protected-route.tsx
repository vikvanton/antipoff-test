import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/use-app-selector";
import { selectAuthToken } from "../../store/selectors/auth-selectors";

interface IProtectedRoute {
  type: "auth" | "unauth";
  children: ReactElement;
}

function ProtectedRoute({ type, children }: IProtectedRoute) {
  const token = useAppSelector(selectAuthToken);

  if (type === "auth") return token ? children : <Navigate to="/signup" />;
  if (type === "unauth") return token ? <Navigate to="/" /> : children;
}

export default ProtectedRoute;
