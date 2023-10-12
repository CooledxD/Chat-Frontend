import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ui
import ButtonMenu from "../../ui/ButtonMenu/ButtonMenu.js";

// modules
import Logout from "../../modules/Logout/index.js";

// components
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.js";

// styles
import styles from './sidebar.module.css'

export default function Sidebar() {
  const navigate = useNavigate()

  // state
  const [showSidebar, setShowSidebar] = useState()

  // handles
  const showSidebarHandle = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className={styles.sidebar}>
      <ButtonMenu onClick={showSidebarHandle} />
      <ul className={`${styles.list} ${!showSidebar && styles.hidden}`}>
        <li 
          className={styles.listItem} 
          onClick={() => navigate('/chat/profile')}
        >
          profile
        </li>
        <li className={styles.listItem}>
          <ThemeSwitch />
        </li>
        <li className={styles.listItem}>
          <Logout />
        </li>
      </ul>
    </div>
  )
}