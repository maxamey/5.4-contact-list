import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/Main'
import Contact from './lib/Contact'

render((
  <Router history={ hashHistory }>
    <Route path="/"
           component={ Main } />
    <Route path="/contact/:namef/:namel/:image/:email/:phone/:location"
    component={ Contact } />
  </Router>
), document.getElementById('app'))
