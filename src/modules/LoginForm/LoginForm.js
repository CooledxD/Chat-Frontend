import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ui
import Button from "../../ui/Button/Button.js";
import InputForm from "../../ui/InputForm/InputForm.js";
import Message from "../../ui/Message/Message.js";

// api
import login from "./api/login.js";

// store actions
import { set } from "../../store/features/auth/authSlice.js";

// styles
import styles from './loginForm.module.css'

export default function LoginForm() {
  // store hooks
  const dispatch = useDispatch()

  // router hooks
  const navigate = useNavigate()

  // state
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [message, setMessage] = useState({
    error: ''
  })

  // handles
  const onChangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault()

      const { accessToken, refreshToken } = await login(formData)

      // console.log(JSON.parse(window.atob(accessToken.split('.')[1])))

      dispatch(set(accessToken))

      localStorage.setItem('refreshToken', refreshToken)

      setMessage({
        error: ''
      })

      setFormData({
        username: '',
        password: ''
      })

      navigate('/chat')
    } catch (error) {
      setMessage({
        error: error.message
      })
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandle}>
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
      
      {/* footer */}
      <footer className={styles.form__footer}>
        <Button
          type={'submit'}
        >
          Login
        </Button>
        
        <Button
          to={'auth/registration'}
          bgColor={false}
        >
          No account?
        </Button>  
      </footer>
    </form>
  )
}