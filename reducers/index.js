/* used for combining all reducers into single reducer */
import { combineReducers } from 'redux'
import bugs from './bugs'

const rootReducer = combineReducers({
  bugs
})

export default rootReducer
