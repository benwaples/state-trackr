import React from 'react'
import { StateType } from '../../types'

export const State = ({ name, wasFun, dateVisited}: StateType) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Visited on: {dateVisited}</p>
      <p>Visit was fun: {wasFun}</p>
    </>
  )
}
