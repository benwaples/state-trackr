import { StateType } from "../types"

export const PREPEND_STATE = 'prependState'
export const prependState = (state: StateType) => ({
  type: PREPEND_STATE,
  payload: state
})

export const UPDATE_STATE = 'updateState'
export const updateState = (state: StateType) => ({
  type: UPDATE_STATE,
  payload: state
})