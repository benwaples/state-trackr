import { StateType } from "../types"

export const PREPEND_STATE = 'prependState'
export const prependState = (state: StateType) => ({
  type: PREPEND_STATE,
  payload: state
})