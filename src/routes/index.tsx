import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetail from '../pages/UserDetail'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={UserDetail} path="/sobre/:username" />
    </BrowserRouter>
  )
}

export default Routes