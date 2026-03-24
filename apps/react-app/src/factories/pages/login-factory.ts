import { Login } from './../../pages/Login'

import React from 'react'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
    />
  )
}
