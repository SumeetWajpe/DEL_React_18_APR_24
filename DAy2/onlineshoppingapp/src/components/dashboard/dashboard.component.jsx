import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage["isAuthenticated"]; // use Context API instead !
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    // navigate("/");
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
