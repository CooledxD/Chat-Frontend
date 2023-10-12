import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './aside.module.css'

export default function Aside({children}) {
  return (
    <aside className={styles.layout}>
      {children}
    </aside>
  )
}

Aside.propTypes = {
  children: PropTypes.node,
}