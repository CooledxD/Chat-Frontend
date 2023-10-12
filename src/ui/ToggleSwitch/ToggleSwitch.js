import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './toggleSwitch.module.css'

export default function ToggleSwitch({state}) {
  return (
    <div className={styles.switch}>
      <span className={`${styles.slider} ${state && styles.sliderClick}`}></span>
    </div>
  )
}

ToggleSwitch.propTypes = {
  state: PropTypes.bool,
}