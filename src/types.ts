export type StateType = {
  id:string,
  name: string; 
  dateVisited: string;
  wasFun: boolean | string
}

export type ActionType = {
  type: string,
  payload: StateType
}

export type ReducerStateType = {
  states: StateType[]
}

export type StateELType = {
  id: string,
  name: string,
  dateVisited: string,
  wasFun: boolean | string,
}