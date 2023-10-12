import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './headerLayout.module.css'

export default function HeaderLayout({children}) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

HeaderLayout.propTypes = {
  children: PropTypes.node,
}