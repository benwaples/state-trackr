import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { prependState } from '../../actions/stateActions'
import { addState } from '../../services/stateAPI'
import { statesAbbreviations } from '../../stateAbbreviation'

export const StateForm = () => {
  const [name, setName] = useState('')
  const [dateVisited, setDateVisited] = useState('')
  const [wasFun, setWasFun] = useState('true')
   const dispatch = useDispatch()

  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()
    const res = await addState({
      id: '',
      name,
      dateVisited,
      wasFun
    })
    dispatch(prependState(res))
    setName('')
    setDateVisited('')
    setWasFun('true')
  }
const stateAbbEl = statesAbbreviations.map(state => <option value={state}>{state}</option>)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the State</label>
        <select id="name" name="name" value={name} onChange={e => setName(e.target.value)}>
          {stateAbbEl}
        </select>
        <label htmlFor="dateVisited">Date visited this state</label>
        <input 
          id="dateVisited"
          name="dateVisited"
          type="date"
          value={dateVisited}
          onChange={e => setDateVisited(e.target.value)}
        />
        <label htmlFor="wasFun">Was it fun?</label>
        <select id="wasFun" name="wasFun" value={wasFun} onChange={e => setWasFun(e.target.value)}>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  )
}
