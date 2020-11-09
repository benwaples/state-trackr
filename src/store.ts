import { createStore } from 'redux'
import reducer from './reducers/stateReducer'

export default createStore(
  reducer,
)