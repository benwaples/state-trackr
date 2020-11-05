import React, { useState } from 'react'
import { addState } from '../../services/stateAPI'

export const StateForm = () => {
  const [name, setName] = useState('')
  const [dateVisited, setDateVisited] = useState('')
  const [wasFun, setWasFun] = useState('true')

  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()
    const res = await addState({
      name,
      dateVisited,
      wasFun
    })
    console.log(res)
    setName('')
    setDateVisited('')
    setWasFun('true')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the State</label>
        <input 
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
