import React from "react";
import { Outlet } from "react-router-dom";

// styles
import styles from './layout.module.css'

export default function Layout() {
  return (
    <div className={styles.lContainer}>
      <Outlet />
    </div>
  )
}