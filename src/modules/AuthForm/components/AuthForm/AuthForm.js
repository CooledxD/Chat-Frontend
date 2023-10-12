import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form } from "react-router-dom";

// styles
import styles from './authForm.module.css'

// ui
import Button from "../../../../ui/Button/Button.js";
import InputForm from "../../../../ui/InputForm/InputForm.js";

export default function AuthForm({ 
  submitting, 
  inputs,
  subText,
  link,
  linkText
}) {
  // state
  const [formData, setFormData] = useState({
    ...inputs.reduce((acc, values) => {
      acc[values.name] = ''
      return acc
    }, {})
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
      method="post"
    >
      {
        inputs.map((values) => {
          return (
            <InputForm 
              key={values.id}
              id={values.id} 
              name={values.name} 
              type={values.type} 
              title={values.title} 
              value={formData[values.name]} 
              onChange={onChangeHandle} 
            />
          )
        })
      }

      {/* footer */}
      <footer className={styles.form__footer}>
        <Button
          type={'submit'}
          disabled={submitting}
        >
          {subText}
        </Button>

        <Button
          to={link}
          bgColor={false}
        >
          {linkText}
        </Button> 
      </footer>
    </Form>
  )
}

AuthForm.propTypes = {
  submitting: PropTypes.bool,
  inputs: PropTypes.array,
  subText: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string
}