import React, { useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react'

// ui
import Button from "../../../../ui/Button/Button.js";

// emoji-picker-button
import emojiButton from '../../assets/img/emoji-smile.svg'

// styles
import styles from './message.module.css'

export default function Message() {
  const fetcher = useFetcher()
  const { chatId } = useParams()

  // form state
  const [formData, setFormData] = useState('')

  // emoji picker cfg, state, handle
  const previewConfig = {
    showPreview: false
  }

  const [showEmoji, setShowEmoji] = useState()

  const showEmojiSwitch = () => {
    setShowEmoji(!showEmoji)
  }

  // form handle
  const onInputFormHandle = (e) => {
    setFormData(e.target.value)
  }

  const onSendFormHandle = () => {
    fetcher.submit(
      {
        message: formData,
        chatId
      },
      {
        method: 'POST'
      }
    )

    setFormData('')
  }

  const onClickEmojiHandle = ({emoji}) => {
    setFormData((message) => {
      return message + emoji
    })
  }

  return (
    <fetcher.Form 
      className={styles.container} 
      onSubmit={onSendFormHandle}
    >
      <div className={`${styles.EmojiPicker} ${!showEmoji && styles.hidden}`}>
        <EmojiPicker 
          onEmojiClick={onClickEmojiHandle}
          searchDisabled={true} 
          lazyLoadEmojis={true} 
          previewConfig={previewConfig}
          height={250} 
          width={280} 
        />
      </div>

      <div className={styles.inputWrap}>
        <img 
          onClick={showEmojiSwitch}
          className={styles.emojiButton}
          src={emojiButton} 
          alt="emoji-button" 
        />
        <input
          className={styles.input}
          value={formData}
          onChange={onInputFormHandle}
          name="message"
          placeholder="message"
          type="text"
          required
        />
      </div>

      <Button 
        type={'submit'}
      >
        Send
      </Button>

      {/* voice */}
      {/* <label>
        <input
          type="button"
        />
      </label> */}
    </fetcher.Form>
  )
}