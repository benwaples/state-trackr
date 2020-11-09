import { CLEAR_UPDATE_STATE, PREPEND_STATE, UPDATE_ALL_STATES, UPDATE_STATE } from "../actions/stateActions";
import { ActionType, ReducerStateType, StateType } from "../types";

const initialState: ReducerStateType = {
  states: [],
  updateState: { id: '', name: '', dateVisited: '', wasFun: '' }
}

export default function reducer(state = initialState, action: ActionType): ReducerStateType {
  switch(action.type) {
    case PREPEND_STATE: 
      return { ...state, states: [(action.payload as StateType), ...state.states]}
    case UPDATE_STATE: 
      return { ...state, updateState: { ...state.updateState, name: (action.payload as string)} }
    case UPDATE_ALL_STATES:
      const filteredState = state.states.filter((state: StateType) => state.id !== (action.payload as string))
      return { ...state, states: filteredState}
    case CLEAR_UPDATE_STATE:
      return { ...state, updateState: initialState.updateState}
    default: 
      return state
  }
}