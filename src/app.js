import React from "react";
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route 
} from "react-router-dom";

// pages
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import ErrorPage from "./pages/ErrorPage/ErrorPage.js";
import Chat from "./pages/Chat/Chat.js";

// components
import Layout from "./components/Layout/Layout.js";
import AuthRoute from "./components/AuthRoute/AuthRoute.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

// styles
import './index.css'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="auth/registration" element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="chat" element={<Chat />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}