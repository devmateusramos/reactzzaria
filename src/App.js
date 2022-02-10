import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './pages/main/Main'
import Login from './pages/login/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
)

export default App
