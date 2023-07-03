import React from "react";

import { 
  Link, 
  useRouteError 
} from "react-router-dom";

import styles from './errorPage.module.css'

export default function ErrorPage() {
  const error = useRouteError()
  const auth = localStorage.getItem('refreshToken')

  return (
    <div className={styles.errorPage}>
      {/* title */}
      <h1>Oops!</h1>

      {/* message */}
      <p>Sorry, an unexpected error has occurred.</p>

      {/* Error text */}
      <p className={styles.errorPage__text}>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to={auth ? 'chat' : '/'}>
        On {auth ? 'main' : 'login'} page
      </Link>
    </div>
  )
}