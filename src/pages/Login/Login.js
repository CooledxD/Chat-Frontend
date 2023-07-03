import React from "react";

// modules
import LoginForm from "../../modules/LoginForm/LoginForm.js";

// components
import Logo from "../../ui/Logo/Logo.js";

// styles
import styles from './login.module.css'

export default function Login() {
  return (
    <main className={styles.login}>
      {/* logo */}
      <Logo />

      {/* title */}
      <h1 className={styles.login__title}>
        Login
      </h1>

      {/* form */}
      <LoginForm />
    </main>
  )
}