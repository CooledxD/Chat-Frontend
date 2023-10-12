import React from "react"
import { useFetcher } from "react-router-dom"

// styles
import styles from './avatarUpload.module.css'

// valid
import {image} from '../../utils/validations/image.js'

export default function AvatarUpload() {
  const fetcher = useFetcher()
  const formData = new FormData()

  const onChangeHandle = async (e) => {
    await image(e.target.files[0].type)

    formData.append('avatar', e.target.files[0])

    fetcher.submit(formData, {
      method: 'POST',
      encType: 'multipart/form-data'
    })
  }

  return (
    <fetcher.Form
      onChange={onChangeHandle}
    >
      <label 
        className={`
          ${styles.label} 
          ${(fetcher.state === 'submitting') && styles.label_loading}
        `}
      >
        change avatar
        <input
          type="file"
          accept="image/*"
          hidden
          disabled={fetcher.state === 'submitting'}
        />
      </label>
    </fetcher.Form>
  )
}