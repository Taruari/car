import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // ❌ Not logged in → redirect
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → allow access
  return children;
}

