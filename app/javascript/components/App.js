import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Scripts from './Scripts/Scripts'
import Script from './Script/Script'

const App = () => {
  return(
    <Switch>
      <Route exact path="/" component={Scripts} />
      <Route exact path="/scripts/:id" component={Script} />
    </Switch>
  )
}

export default App
