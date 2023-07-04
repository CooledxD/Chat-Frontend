import React from "react";
import { useNavigation, useActionData } from "react-router-dom";

// modules
import RegisterForm from "../../modules/RegisterForm/index.js";

// components
import Logo from "../../ui/Logo/Logo.js";

// ui
import Message from '../../ui/Message/Message.js'

// styles
import styles from './register.module.css'

export default function Register() {
  const navigation = useNavigation()
  const actionData = useActionData()

  return (
    <main className={styles.register}>
      {/* logo */}
      <Logo />

      {/* title */}
      <h1 className={styles.register__title}>
        Register
      </h1>

      <Message 
        error={actionData?.error} 
        success={actionData?.success} 
      />

      {/* form */}
      <RegisterForm 
        submitting={ navigation.state === 'submitting' } 
      />
    </main>
  )
}

