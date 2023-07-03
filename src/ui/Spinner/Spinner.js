import React from "react";

// styles
import styles from './spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.spinner}></div>
    </div>
  )
}