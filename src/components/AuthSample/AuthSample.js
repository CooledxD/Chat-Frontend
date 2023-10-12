import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './authSample.module.css'

// ui
import Logo from "../../ui/Logo/Logo.js";

export default function AuthSample({ title, children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Logo />

        <h1 className={styles.title}>
          {title}
        </h1>
      </header>
      
      <main>
        {children}
      </main>
    </div>
  )
}

AuthSample.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array
}