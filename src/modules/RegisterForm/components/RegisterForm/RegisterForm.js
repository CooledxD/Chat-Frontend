import React, { useEffect, useState } from "react";

// ui
import Button from "../../../../ui/Button/Button.js";
import InputForm from "../../../../ui/InputForm/InputForm.js";
import Message from "../../../../ui/Message/Message.js";

// api
import register from "../../api/register.js";

// styles
import styles from './registerForm.module.css'

export default function RegisterForm() {
  // states
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState({
    error: '',
    success: '',
  })
  const [load, setLoad] = useState(false)
  const [featchError, setFeatchError] = useState(false) 

  // handles
  const onChangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault()

      setLoad(true)

      await register(formData)

      setLoad(false)

      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
      })

      setMessage({
        error: '',
        success: 'success',
      })
    } catch (error) {
      if (error.message.split(' ')[1] === 'NetworkError') {
        setFeatchError(true)
      }

      setLoad(false)

      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
      })

      setMessage({
        error: error.message,
        success: '',
      })
    }
  }

  useEffect(() => {
    if (featchError) {
      throw new Error('503')
    }
  }, [featchError])

  return (
    <form 
      className={styles.form} 
      onSubmit={onSubmitHandle}
    >
      {/* message */}
      <Message 
        error={message.error} 
        success={message.success} 
      />

      {/* username */}
      <InputForm 
        id={'username'} 
        name={'username'} 
        type={'text'} 
        title={'username'} 
        value={formData.username} 
        onChange={onChangeHandle} 
      />

      {/* password */}
      <InputForm 
        id={'password'} 
        name={'password'} 
        type={'password'} 
        title={'password'} 
        value={formData.password} 
        onChange={onChangeHandle} 
      />

      {/* confirm password */}
      <InputForm 
        id={'confirmPassword'} 
        name={'confirmPassword'} 
        type={'password'} 
        title={'confirm password'} 
        value={formData.confirmPassword} 
        onChange={onChangeHandle} 
      />

      {/* footer */}
      <footer className={styles.form__footer}>
        <Button
          type={'submit'} 
          disabled={load}
        >
          Confirm
        </Button>

        <Button 
          to={'/'} 
          bgColor={false}
        >
          Already registered?
        </Button>
      </footer>
    </form>
  )
}