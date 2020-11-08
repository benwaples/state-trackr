import React from 'react'
import { useDispatch } from 'react-redux'
import { updateState } from '../../actions/stateActions'
import { deleteState } from '../../services/stateAPI'
import { StateType } from '../../types'

export const State = ({ name, wasFun, dateVisited, id}: StateType) => {

  const dispatch = useDispatch()
  const handleDelete = () => {
    deleteState(id)
  }

  // const handleUpdate = () => {
  //   dispatch(updateState({ name, wasFun, dateVisited, id}))
  // }

  return (
    <>
          <h3>{name}</h3>
          <p>Visited on: {dateVisited}</p>
          <p>This visit was {!wasFun && 'not'} fun</p>
          {/* <button onClick={handleUpdate}>update visit</button> */}
          <button onClick={handleDelete}>delete visit</button>
    </>
  )
}
