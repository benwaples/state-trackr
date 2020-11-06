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