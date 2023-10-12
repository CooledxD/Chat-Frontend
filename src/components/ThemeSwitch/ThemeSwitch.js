import React from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

// store
import { switchTheme } from "../../store/features/theme/themeSlice.js";

// ui
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch.js";

// styles
import styles from './themeSwitch.module.css'

export default function ThemeSwitch({text='dark mode'}) {
  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.theme)
  
  // handles
  const themeHandle = () => {
    dispatch(switchTheme())
  }
  
  return (
    <div className={styles.switchWrap} onClick={themeHandle}> 
      {text}
      <ToggleSwitch state={theme} />
    </div>
  )
}

ThemeSwitch.propTypes = {
  text: PropTypes.string,
}