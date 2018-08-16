import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { listReducer as list, editReducer as edit } from '../features';
import client from '../core/apollo-client';

const rootReducer = combineReducers({
  form,
  list,
  edit,
  apollo: client.reducer(),
});

export default rootReducer