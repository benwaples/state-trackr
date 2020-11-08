import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllState } from '../../services/stateAPI'
import { LooseStateObject, ReducerStateType, StateType } from '../../types'
import { UpdateState } from '../updateState/UpdateState'
import { State } from './State'
import USAMap from "react-usa-map";
import { updateState } from '../../actions/stateActions'


export const StateList = () => {
  const [states, setStates] = useState<StateType[]>([{ name: '', id: '', dateVisited: '', wasFun: '' }])
  const stateToUpdate = useSelector((state: ReducerStateType) => state.updateState)
  const reducerStates = useSelector((state: ReducerStateType) => state.states)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllState()
      .then(states => setStates(states))
  }, [reducerStates])

  console.log(states)
  const handleUpdate = ({ target }: { target: { dataset: { name: string }}}) => {
    console.log(target.dataset.name)
    dispatch(updateState(target.dataset.name ))
  }

  const stateElements: LooseStateObject = {}
  states.forEach((state: StateType) => stateElements[state.name] = { fill: state.wasFun === true ?'navy':'red', id: state.id})

  return (
    <div>
      <USAMap customize={stateElements} onClick={handleUpdate}/>
      {stateToUpdate.name && <UpdateState nameToUpdate={stateToUpdate.name}/>}
    </div>
  )
}
