import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { App } from './pages'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <App/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
