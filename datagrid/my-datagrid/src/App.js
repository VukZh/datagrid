import React from 'react';
import { Provider } from 'react-redux';

import Datagrid from './Datagrid';
import DatagridFast from './DatagridFast';

import DataList from './DataList';
import DataListFast from './DataListFast';


import DataContainerSlow from './DataContainerSlow';
import DataContainerFast from './DataContainerFast';
import DataContainer from './DataContainer';



import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import Form from 'react-bootstrap/Form';

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
                          

const {set_shft,unset_shft, set_mode, unset_mode} = bindActionCreators (actions, dispatch);


document.addEventListener('keydown', (e) => {const key = e.key; set_shft(key)});
document.addEventListener('keyup', (e) => {const key = e.key; unset_shft(key)});


//  const mode = document.querySelector('#switchMode');
//  console.log('>>> ' + mode);
//let mode;
function App() { 

//  console.log('>>> ' + mode)
  
  return (
    <Provider store = { store }>
      <div className="App">
          <h1>
              my-datagrid
          </h1>
        <div className="form">
          <Form>
            <Form.Check onChange = {(e)=>{e.target.checked ? set_mode() : unset_mode()}}   
              type="switch"
              id="switchMode"
              label="Set react-window for table"
            />
        </Form>
      </div>
        <DataContainer
      />
      </div>
    </Provider>
  );
}

export default App;
