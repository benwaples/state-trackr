import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllState } from '../../services/stateAPI'
import { ReducerStateType, StateType } from '../../types'
import { UpdateState } from '../updateState/UpdateState'
import { State } from './State'

export const StateList = () => {
  const [states, setStates] = useState<StateType[]>([{ name: '', id: '', dateVisited: '', wasFun: '' }])
  const updateState = useSelector((state: ReducerStateType) => state.updateState)

  useEffect(() => {
    getAllState()
      .then(states => setStates(states))
  }, [states])

  const stateElements = states.map((state: StateType) => (<li key={state.id}><State {...state}/></li>))

  return (
    <div>
      {stateElements}
      {updateState.id && <UpdateState id={updateState.id}/>}
    </div>
  )
}
