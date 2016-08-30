/* main entry file for Bug Tracker App*/

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import BugTrackerApp from './containers/BugTrackerApp'
import configureStore from './store/configureStore'
import './css/bug.css'

const store = configureStore()

render(
  <Provider store={store}>
    <BugTrackerApp />
  </Provider>,
  document.getElementById('bugApp')
)
