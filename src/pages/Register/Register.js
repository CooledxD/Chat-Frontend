import React from "react";

// modules
import RegisterForm from "../../modules/RegisterForm/index.js";

// components
import Logo from "../../ui/Logo/Logo.js";

// styles
import styles from './register.module.css'

export default function Register() {
  return (
    <main className={styles.register}>
      {/* logo */}
      <Logo />

      {/* title */}
      <h1 className={styles.register__title}>
        Register
      </h1>

      {/* form */}
      <RegisterForm />
    </main>
  )
}