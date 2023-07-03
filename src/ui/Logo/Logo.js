import React from "react";

// styles
import styles from './logo.module.css'

// logo
import logo from '../../assets/img/logo/paper-plane.svg'

export default function Logo() {
  return (
    <img 
      className={styles.logo}
      src={logo} 
      alt="logo" 
    />
  )
}