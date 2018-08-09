import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as list } from './tool-search/tool-list';
import { reducer as edit } from './tool-search/tool-edit';
import client from '../core/apollo-client';

const rootReducer = combineReducers({
  form,
  list,
  edit,
  apollo: client.reducer(),
});

export default rootReducer