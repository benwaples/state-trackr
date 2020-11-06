import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import './App.css';
import { StateForm } from './stateForm/StateForm';
import { StateList } from './stateList/StateList';

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
