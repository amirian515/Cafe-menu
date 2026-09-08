import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type UserProtectedRouteProps = {
  children: ReactNode;
};

function UserProtectedRoute({
  children,
}: UserProtectedRouteProps) {
  const token = localStorage.getItem("userToken");

  if (!token) {
    return <Navigate to="/user-login" replace />;
  }

  return <>{children}</>;
}

export default UserProtectedRoute;