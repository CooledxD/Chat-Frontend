import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import styles from './globalLayout.module.css'

export default function GlobalLayout() {
  // store
  const { theme } = useSelector(state => state.theme)

  return (
    <div 
      className={`
        ${styles.lContainer} 
        ${theme && styles.lContainerDark}
      `}
    >
      <Outlet />
    </div>
  )
}