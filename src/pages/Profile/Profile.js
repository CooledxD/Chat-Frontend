import React from "react";
import { useSelector } from "react-redux";

// styles
import styles from './profile.module.css'

// ui
import Avatar from '../../ui/Avatar/Avatar.js'

// modules
import AvatarUpload from '../../modules/AvatarUpload/index.js'

export default function Profile() {
  const { avatarUrl } = useSelector(state => state.user)

  return (
    <div className={styles.profile}>
      <Avatar 
        className={styles.avatar} 
        src={avatarUrl}
      />
      <AvatarUpload />
    </div>
  )
}