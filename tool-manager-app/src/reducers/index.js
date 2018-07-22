import { combineReducers } from "redux"
import toolsReducer from './toolsReducer'
import { reducer as reduxFormReducer } from 'redux-form'

const reducer = combineReducers({
    toolsReducer,
    form: reduxFormReducer
})

export default reducer