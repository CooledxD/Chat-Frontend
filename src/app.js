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
import Dialog from "./pages/Dialog/Dialog.js";
import Profile from './pages/Profile/Profile.js'

// components
import GlobalLayout from "./components/GlobalLayout/GlobalLayout.js";
import AuthRoute from "./components/AuthRoute/AuthRoute.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

// actions
import { loginAction } from "./modules/AuthForm/index.js";
import { registerAction } from "./modules/AuthForm/index.js";
import { avatarAction } from "./modules/AvatarUpload/index.js";

// loaders
import { loader as loaderUserData } from "./pages/Chat/utils/loader.js";

// styles
import './index.css'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<GlobalLayout />} 
        errorElement={<ErrorPage />}
      >
        <Route element={<AuthRoute />}>
          <Route 
            index 
            element={<Login />} 
            action={loginAction}
          />
          <Route 
            path="auth/register" 
            element={<Register />} 
            action={registerAction} 
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route 
            path="chat" 
            element={<Chat />} 
            loader={loaderUserData}
          >
            <Route 
              path=":userId" 
              element={<Dialog />}
            />
            <Route 
              path="profile" 
              element={<Profile />}
              action={avatarAction}
            />
          </Route>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}