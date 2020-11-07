import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { ReducerStateType } from '../types';
import './App.css';
import { StateForm } from './stateForm/StateForm';
import { StateList } from './stateList/StateList';
import { UpdateState } from './updateState/UpdateState';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <StateForm />
        <StateList />
      </Provider>
    </div>
  );
}

export default App;
