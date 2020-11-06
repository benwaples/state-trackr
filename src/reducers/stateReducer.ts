import { PREPEND_STATE, UPDATE_STATE } from "../actions/stateActions";
import { ActionType, ReducerStateType } from "../types";

const initialState: ReducerStateType = {
  states: [],
  updateState: { id: '', name: '', dateVisited: '', wasFun: '' }
}

export default function reducer(state = initialState, action: ActionType): ReducerStateType {
  switch(action.type) {
    case PREPEND_STATE: 
      return { ...state, states: [action.payload, ...state.states]}
    case UPDATE_STATE: 
      return { ...state, updateState: action.payload }
    default: 
      return state
  }
}