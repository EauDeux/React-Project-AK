import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Articles from '../pages/articles'
import ErrorPage from '../pages/404'
import About from '../pages/about'
import Login from '../pages/login'

import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/articles' component={Articles} />
      <Route path='/about' component={About} />
      <Route path='/ErrorPage' component={ErrorPage} />
      <Redirect to='/ErrorPage'></Redirect>
    </Switch>
  )
}

export default Routes
