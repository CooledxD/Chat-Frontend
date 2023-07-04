import React, { useEffect } from "react";
import { useActionData, useNavigate, useNavigation } from "react-router-dom";

// modules
import LoginForm from "../../modules/LoginForm/index.js";

// components
import Logo from "../../ui/Logo/Logo.js";

// ui
import Message from "../../ui/Message/Message.js";

// styles
import styles from './login.module.css'

export default function Login() {
  const navigation = useNavigation()
  const actionData = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (actionData?.success) {
      navigate('/chat')
    }
  }, [actionData, navigate])
  
  return (
    <main className={styles.login}>
      {/* logo */}
      <Logo />

      {/* title */}
      <h1 className={styles.login__title}>
        Login
      </h1>

      {/* message */}
      <Message 
        error={actionData?.error} 
      />

      {/* form */}
      <LoginForm 
        submitting={ navigation.state === 'submitting' } 
      />
    </main>
  )
}