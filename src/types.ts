export type StateType = {
  id:string,
  name: string; 
  dateVisited: string;
  wasFun: boolean | string
}

export type ActionType = {
  type: string,
  payload: StateType | string
}

export type ReducerStateType = {
  states: StateType[],
  updateState: StateType 
}

export type StateELType = {
  id: string,
  name: string,
  dateVisited: string,
  wasFun: boolean | string,
}