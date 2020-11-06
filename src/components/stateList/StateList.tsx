import React from 'react'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../types'
import { State } from './State'

export const StateList = () => {
  const states = useSelector((state: ReducerStateType) => state.states)

  const stateElements = states.map((state) => (<li key={state.id}><State {...state}/></li>))

  console.log(states)
  return (
    <div>
      {stateElements}
    </div>
  )
}
