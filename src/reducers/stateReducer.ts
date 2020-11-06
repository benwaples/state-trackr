import { PREPEND_STATE } from "../actions/stateActions";
import { ActionType, ReducerStateType } from "../types";

const initialState: ReducerStateType = {
  states: []
}

export default function reducer(state = initialState, action: ActionType): ReducerStateType {
  switch(action.type) {
    case PREPEND_STATE: 
      return { ...state, states: [action.payload, ...state.states]}
    default: 
      return state
  }
}