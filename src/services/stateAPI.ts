import { StateType } from "../types"
const api = process.env.API_URL as string

export const addState = async(state : StateType) => {
  console.log(state)
  const changeBool = {
    ...state,
    wasFun: state.wasFun === 'true' ? true : false
  }

  const res = await fetch(`http://localhost:7890/api/v1/states`, {
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