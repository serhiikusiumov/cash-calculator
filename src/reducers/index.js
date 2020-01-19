import { combineReducers } from 'redux'
import cash from './cash'
import { reducer as reduxFormReducer } from "redux-form"

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  cash
})
