import React from "react";
import Navbar from "../navbar/navbar";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/authHook";

function Dashboard() {
  // const isAuthenticated = sessionStorage["isAuthenticated"]; // use Context API instead !

  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
