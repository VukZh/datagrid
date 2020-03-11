import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import Table from 'react-bootstrap/Table';

const composeEnhancers = composeWithDevTools({
});

const middlewares = [thunkMiddleware];

const setOrderSym = () => {
  store.dispatch({type: 'SYM_ORDER'});
}
const setOrderName = () => {
  store.dispatch({type: 'NAME_ORDER'});
}
const setOrderCap = () => {
  store.dispatch({type: 'CAP_ORDER'});
}
const setOrderPrice = () => {
  store.dispatch({type: 'PRICE_ORDER'});
}
const setOrderChange1h = () => {
  store.dispatch({type: 'C1H_ORDER'});
}
const setOrderChange24h = () => {
  store.dispatch({type: 'C24H_ORDER'});
}
const setOrderChange1d = () => {
  store.dispatch({type: 'C1D_ORDER'});
}
const setOrderMine = () => {
  store.dispatch({type: 'MINE_ORDER'});
}


const setCtrl = () => {
  store.dispatch({type: 'SET_CTRL'});
}
const unsetCtrl = () => {
  store.dispatch({type: 'UNSET_CTRL'});
}


const initialState = {
  order_sym: 'thead__align',
  order_name: 'thead__align',
  order_cap: 'thead__align',
  order_price: 'thead__align',
  order_c1h: 'thead__align',
  order_c24h: 'thead__align',
  order_c1d: 'thead__align',
  order_mine: 'thead__align',
  ctrl_btn: false,
};

const handleKeyDown = (e) => {
  if (e.key === 'Shift' ) setCtrl();
}
const handleKeyUp = (e) => {
  if (e.key === 'Shift' ) unsetCtrl();
}


document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

const reducer = (state = initialState, action) => {
  
  let currState = state.ctrl_btn ? state : initialState;
  
  switch (action.type){      
    case 'SYM_ORDER': 
      if(state.order_sym === 'thead__align') return {...currState, order_sym: 'thead__align up'}
      if(state.order_sym === 'thead__align up') return {...currState, order_sym: 'thead__align down'}
     return {...currState, order_sym: 'thead__align'};  
    case 'NAME_ORDER': 
      if(state.order_name === 'thead__align') return {...currState, order_name: 'thead__align up'}
      if(state.order_name === 'thead__align up') return {...currState, order_name: 'thead__align down'}
     return {...currState, order_name: 'thead__align'};  
    case 'CAP_ORDER': 
      if(state.order_cap === 'thead__align') return {...currState, order_cap: 'thead__align up'}
      if(state.order_cap === 'thead__align up') return {...currState, order_cap: 'thead__align down'}
     return {...currState, order_cap: 'thead__align'};   
    case 'PRICE_ORDER': 
      if(state.order_price === 'thead__align') return {...currState, order_price: 'thead__align up'}
      if(state.order_price === 'thead__align up') return {...currState, order_price: 'thead__align down'}
     return {...currState, order_price: 'thead__align'}; 
    case 'C1H_ORDER': 
      if(state.order_c1h === 'thead__align') return {...currState, order_c1h: 'thead__align up'}
      if(state.order_c1h === 'thead__align up') return {...currState, order_c1h: 'thead__align down'}
     return {...currState, order_c1h: 'thead__align'}; 
    case 'C24H_ORDER': 
      if(state.order_c24h === 'thead__align') return {...currState, order_c24h: 'thead__align up'}
      if(state.order_c24h === 'thead__align up') return {...currState, order_c24h: 'thead__align down'}
     return {...currState, order_c24h: 'thead__align'}; 
    case 'C1D_ORDER': 
      if(state.order_c1d === 'thead__align') return {...currState, order_c1d: 'thead__align up'}
      if(state.order_c1d === 'thead__align up') return {...currState, order_c1d: 'thead__align down'}
     return {...currState, order_c1d: 'thead__align'}; 
    case 'MINE_ORDER': 
      if(state.order_mine === 'thead__align') return {...currState, order_mine: 'thead__align up'}
      if(state.order_mine === 'thead__align up') return {...currState, order_mine: 'thead__align down'}
     return {...currState, order_mine: 'thead__align'}; 
      
    case 'SET_CTRL': 
      return {...state, ctrl_btn: true};   
    case 'UNSET_CTRL': 
      return {...state, ctrl_btn: false};        
      
    default:
      return state;
  }  
}




const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middlewares),
));

store.subscribe(()=>{document.getElementById('sym').className = store.getState().order_sym})
store.subscribe(()=>{document.getElementById('name').className = store.getState().order_name})
store.subscribe(()=>{document.getElementById('cap').className = store.getState().order_cap})
store.subscribe(()=>{document.getElementById('price').className = store.getState().order_price})
store.subscribe(()=>{document.getElementById('c1h').className = store.getState().order_c1h})
store.subscribe(()=>{document.getElementById('c24h').className = store.getState().order_c24h})
store.subscribe(()=>{document.getElementById('c1d').className = store.getState().order_c1d})
store.subscribe(()=>{document.getElementById('mine').className = store.getState().order_mine})

function App() { 


  return (
    <div className="App">
        <h1>
            my-datagrid
        </h1>
        <Table striped bordered hover size="sm">
          <thead className='pointer'>
            <tr>
              <th id='sym' className = 'thead__align' onClick={setOrderSym}>Symbol</th>
              <th id='name' className='thead__align' onClick={setOrderName}>Name</th>
              <th id='cap' className='thead__align' onClick={setOrderCap}>Market Cap</th>
              <th id='price' className='thead__align' onClick={setOrderPrice}>Price</th>
              <th id='c1h' className='thead__align' onClick={setOrderChange1h}>% Change 1h</th>
              <th id='c24h' className='thead__align' onClick={setOrderChange24h}>% Change 24h</th>
              <th id='c1d' className='thead__align' onClick={setOrderChange1d}>% Change 7d</th>
              <th id='mine' className='thead__align' onClick={setOrderMine}>Mineable</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>BTC</td>
              <td>Bitcoin</td>
              <td>159657931152.3305</td>
              <td>8747.27164166</td>
              <td>0.0238659</td>
              <td>0.225539</td>
              <td>-1.52014</td>
              <td>true</td>    
            </tr>
            <tr>
              <td>ETH</td>
              <td>Ethereum</td>
              <td>24514076946.157574</td>
              <td>222.938535564</td>
              <td>-0.292308</td>
              <td>-0.0461942</td>
              <td>-2.25433</td>
              <td>true</td>    
            </tr>
            <tr>
              <td>XRP</td>
              <td>XRP</td>
              <td>10200443740.160034</td>
              <td>0.232995826622</td>
              <td>0.0171207</td>
              <td>-0.193865</td>
              <td>-0.732131</td>
              <td>false</td>    
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default App;
