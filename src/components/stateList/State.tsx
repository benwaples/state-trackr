import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteState } from '../../services/stateAPI'
import { StateType } from '../../types'
import { UpdateState } from '../updateState/UpdateState'

export const State = ({ name, wasFun, dateVisited, id}: StateType) => {
  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    deleteState(id)
  }

  return (
    <>
    {
      !update ?
      (<>
          <h3>{name}</h3>
          <p>Visited on: {dateVisited}</p>
          <p>This visit was {!wasFun && 'not'} fun</p>
          <button onClick={e => setUpdate(true)}>update visit</button>
          <button onClick={handleDelete}>delete visit</button>
        </>)
      :
      <UpdateState />
    }
    </>
  )
}
