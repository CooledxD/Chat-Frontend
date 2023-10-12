import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './chatPageLayout.module.css'

export default function ChatPageLayout({children}) {
  return (
    <main className={styles.layout}>
      {children}
    </main>
  )
}

ChatPageLayout.propTypes = {
  children: PropTypes.node,
}