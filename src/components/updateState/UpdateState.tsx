import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearUpdateState, updateAllState } from '../../actions/stateActions'
import { deleteState, getStateByName, updateState } from '../../services/stateAPI'
import { statesAbbreviations } from '../../stateAbbreviation'
import './UpdateState.scss'

export const UpdateState = ({ nameToUpdate }: { nameToUpdate: string }) => {
  const [id , setId ] = useState('')
  const [name, setName] = useState('')
  const [dateVisited, setDateVisited] = useState('')
  const [wasFun, setWasFun] = useState('true')
  const dispatch = useDispatch()

  useEffect(() => {
    getStateByName(nameToUpdate)
      .then(res => {
        setName(res.name)
        setDateVisited(res.dateVisited)
        setWasFun(res.wasFun)
        setId(res.id)
      })
    
  }, [nameToUpdate])

  const handleDelete = () => {
    deleteState(id)
    dispatch(updateAllState(id))
    dispatch(clearUpdateState())
  }
  

  const handleSubmit = async(event: { preventDefault: () => void }) => {
    event.preventDefault()
    await updateState(id, { id, name, dateVisited, wasFun})
    dispatch(updateAllState(id))
    dispatch(clearUpdateState())
  }

  const stateAbbEl = statesAbbreviations.map(state => <option value={state}>{state}</option>)


  return (
    <div id="update">
      <h1>Update Visit</h1>
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
        <select className={wasFun ? 'blue' : 'red'} id="wasFun" name="wasFun" value={wasFun} onChange={e => setWasFun(e.target.value)}>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <button>edit</button>
      </form>
      <button id="delete-visit"onClick={handleDelete}>delete visit</button>
    </div>
  )
}
