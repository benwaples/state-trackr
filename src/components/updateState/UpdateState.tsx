import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearUpdateState, updateAllState } from '../../actions/stateActions'
import { getStateById, updateState } from '../../services/stateAPI'

export const UpdateState = ({ id }: { id: string }) => {
  const [name, setName] = useState('')
  const [dateVisited, setDateVisited] = useState('')
  const [wasFun, setWasFun] = useState('true')
  const dispatch = useDispatch()

  useEffect(() => {
    getStateById(id)
      .then(res => {
        setName(res.name)
        setDateVisited(res.dateVisited)
        setWasFun(res.wasFun)
      })
    
  }, [id])
  

  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()
    await updateState(id, { id, name, dateVisited, wasFun})
    dispatch(updateAllState(id))
    dispatch(clearUpdateState())
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
