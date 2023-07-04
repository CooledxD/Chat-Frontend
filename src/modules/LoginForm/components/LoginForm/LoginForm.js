import React, { useState } from "react";
import { Form } from "react-router-dom";
import PropTypes from 'prop-types';

// ui
import Button from "../../../../ui/Button/Button.js";
import InputForm from "../../../../ui/InputForm/InputForm.js";

// styles
import styles from './loginForm.module.css'

export default function LoginForm({ submitting }) {
  // state
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // handles
  const onChangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Form 
      className={styles.form} 
      method='post'
    >
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
          disabled={submitting}
        >
          Login
        </Button>
        
        <Button
          to={'auth/register'}
          bgColor={false}
        >
          No account?
        </Button>  
      </footer>
    </Form>
  )
}

LoginForm.propTypes = {
  submitting: PropTypes.bool,
}