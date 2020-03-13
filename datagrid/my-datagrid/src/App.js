import React from 'react';
import { Provider } from 'react-redux';

import Datagrid from './Datagrid';
import DataList from './DataList';

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';

import reducer from './reducer';

import * as actions from './actions';

//import data from './data/dataSmall.js';
//import prepareDataForTable from './data/prepareDataForTable.js';


//console.log (prepareDataForTable[2]);


const composeEnhancers = composeWithDevTools({
});

const middlewares = [thunkMiddleware];


const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middlewares),
));

const { dispatch } = store;
                          

const {set_shft,unset_shft} = bindActionCreators (actions, dispatch);


document.addEventListener('keydown', (e) => {const key = e.key; set_shft(key)});
document.addEventListener('keyup', (e) => {const key = e.key; unset_shft(key)});


function App() { 


  return (
    <Provider store = { store }>
      <div className="App">
          <h1>
              my-datagrid
          </h1>
        <DataList
      />
      </div>
    </Provider>
  );
}

export default App;
