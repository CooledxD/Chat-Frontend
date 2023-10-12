import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './avatar.module.css'

import basicAvatar from './basicAvatar.svg'

export default function Avatar({ 
  src, 
  alt, 
  className 
}) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <img 
        className={`${styles.img}`}
        src={src || basicAvatar} 
        alt={alt} 
      />
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
}