import React from "react";
import { 
  Navigate, 
  Outlet 
} from "react-router-dom";

export default function AuthRoute() {
  return localStorage.getItem('refreshToken') ? 
    <Navigate to={'/chat'} /> : 
    <Outlet />
}