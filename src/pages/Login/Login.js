import React from "react";
import { useActionData, useNavigation } from "react-router-dom";

// modules
import AuthForm from "../../modules/AuthForm/index.js";

// components
import AuthSample from "../../components/AuthSample/AuthSample.js";

// ui
import Alert from "../../ui/Alert/Alert.js";

export default function Login() {
  const navigation = useNavigation()
  const actionData = useActionData()

  return (
    <AuthSample title={'Login'}>
      {/* alert */}
      <Alert
        error={actionData?.error}
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
          }
        ]}
        subText={'Login'}
        link={'auth/register'}
        linkText={'No account?'}
      />
    </AuthSample>
  )
}