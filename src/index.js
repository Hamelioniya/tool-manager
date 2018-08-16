import React from 'react';
import { render } from 'react-dom';

import App from './core/app';
import { store } from './core/store';
import client from './core/apollo-client';

render(
  <App store={store} client={client}/>,
  document.getElementById('root')
)