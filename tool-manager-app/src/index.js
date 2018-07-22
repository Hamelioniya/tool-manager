import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import { config } from './configureStore'

render(
  <Root store = {config().store} persistor={config().persistor} />,
  document.getElementById('root')
)