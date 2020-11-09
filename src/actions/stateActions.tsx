import { StateType } from "../types"

export const PREPEND_STATE = 'prependState'
export const prependState = (state: StateType) => ({
  type: PREPEND_STATE,
  payload: state
})

export const UPDATE_ALL_STATES = 'updateAllStates'
export const updateAllState = (id: string) => ({
  type: UPDATE_ALL_STATES,
  payload: id
})

export const UPDATE_STATE = 'updateState'
export const updateState = (id: string) => ({
  type: UPDATE_STATE,
  payload: id
})

export const CLEAR_UPDATE_STATE = 'clearUpdateState' 
export const clearUpdateState = () => ({
  type: CLEAR_UPDATE_STATE,
})