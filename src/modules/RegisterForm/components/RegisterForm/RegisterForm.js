import React, { useState } from "react";
import { Form } from "react-router-dom";
import PropTypes from 'prop-types';

// ui
import Button from "../../../../ui/Button/Button.js";
import InputForm from "../../../../ui/InputForm/InputForm.js";

// styles
import styles from './registerForm.module.css'

export default function RegisterForm({ submitting }) {
  // states
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  })

  // handles
  const onChangeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
          disabled={submitting}
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
    </Form>
  )
}

RegisterForm.propTypes = {
  submitting: PropTypes.bool,
}