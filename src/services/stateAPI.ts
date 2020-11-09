import { StateType } from "../types"
const api = process.env.REACT_APP_API_URL as string

export const addState = async(state : StateType) => {
  const changeBool = {
    ...state,
    wasFun: state.wasFun === 'true' ? true : false
  }

  const res = await fetch(`${api}/api/v1/states`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(changeBool)
  })
  
  const json = await res.json()

  if(!res.ok) return json
  return json
}

export const getAllState = async() => {
  const res = await fetch(`${api}/api/v1/states`)

  const json = res.json()

  if(!res.ok) return json
  return json
}

export const getStateByName = async(name: string) => {
  const res = await fetch(`${api}/api/v1/states/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const json = await res.json()

  if(!res.ok) return json
  return json
}

export const updateState = async(id: string, updatedState: StateType) => {
  const changeBool = {
    ...updatedState,
    wasFun: updatedState.wasFun === 'true' ? true : false
  }
  
  const res = await fetch(`${api}/api/v1/states/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changeBool)
  })

  const json = await res.json()

  if(!res.ok) return json
  return json
}

export const deleteState = async(id: string) => {
  const res = await fetch(`${api}/api/v1/states/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const json = await res.json()

  if(!res.ok) return json
  return json
}