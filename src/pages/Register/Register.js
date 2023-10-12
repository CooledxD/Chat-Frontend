import React from "react";
import { useNavigation, useActionData } from "react-router-dom";

// modules
import AuthForm from "../../modules/AuthForm/index.js";

// components
import AuthSample from "../../components/AuthSample/AuthSample.js";

// ui
import Alert from '../../ui/Alert/Alert.js'

export default function Register() {
  const navigation = useNavigation()
  const actionData = useActionData()

  return (
    <AuthSample title={'Register'}>
      {/* alert */}
      <Alert 
        error={actionData?.error} 
        success={actionData?.success} 
      />

      {/* form */}
      <AuthForm
        submitting={navigation.state === 'submitting'}
        inputs={[
          {
            id: 'username',
            name: 'username',
            type: 'text',
            title: 'username'
          },
          {
            id: 'password',
            name: 'password',
            type: 'password',
            title: 'password',
          },
          {
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            title: 'confirm password',
          }
        ]}
        subText={'Confirm'}
        link={'/'}
        linkText={'Already registered?'}
      />
    </AuthSample>
  )
}

