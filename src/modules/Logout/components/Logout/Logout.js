import React from "react";
import { useNavigate } from "react-router-dom";

// api
import logout from '../../api/logout.js'

// styles
import styles from './logout.module.css'

export default function Logout() {
  const navigate = useNavigate()

  // handles
  const logoutHandle = async () => {
    await logout()
    navigate('/')
  }

  return (
    <span 
      className={styles.logout} 
      onClick={logoutHandle}
    >
      logout
    </span>
  )
}