import React from 'react';
import { createStore } from 'redux';
import './App.css';
import Table from 'react-bootstrap/Table';

const setOrderSym = () => {
  store.dispatch({type: 'SYM_ORDER'});
}
const setOrderName = () => {
//  alert('sss')
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

const initialState = {
  sym: 'thead__align',
  name: 'thead__align',
  cap: 'thead__align',
  price: 'thead__align',
  c1h: 'thead__align',
  c24h: 'thead__align',
  c1d: 'thead__align',
  mine: 'thead__align',  
};


const reducer = (state = initialState, action) => {  
  switch (action.type){
    case 'SYM_ORDER': 
      if(state.sym === 'thead__align') return Object.assign({}, state, {
        sym: 'thead__align up'
      })
      if(state.sym === 'thead__align up') return Object.assign({}, state, {
        sym: 'thead__align down'
      })
     return Object.assign({}, state, {
        sym: 'thead__align'
      });  
    case 'NAME_ORDER': 
      if(state.name === 'thead__align') return Object.assign({}, state, {
        name: 'thead__align up'
      })
      if(state.name === 'thead__align up') return Object.assign({}, state, {
        name: 'thead__align down'})
      return Object.assign({}, state, {
        name: 'thead__align'});  
    case 'CAP_ORDER': 
      if(state.cap === 'thead__align') return Object.assign({}, state, {
        cap: 'thead__align up'
      })
      if(state.cap === 'thead__align up') return Object.assign({}, state, {
        cap: 'thead__align down'})
      return Object.assign({}, state, {
        cap: 'thead__align'});   
    case 'PRICE_ORDER': 
      if(state.price === 'thead__align') return Object.assign({}, state, {
        price: 'thead__align up'
      })
      if(state.price === 'thead__align up') return Object.assign({}, state, {
        price: 'thead__align down'})
      return Object.assign({}, state, {
        price: 'thead__align'});
    case 'C1H_ORDER': 
      if(state.c1h === 'thead__align') return Object.assign({}, state, {
        c1h: 'thead__align up'
      })
      if(state.c1h === 'thead__align up') return Object.assign({}, state, {
        c1h: 'thead__align down'})
      return Object.assign({}, state, {
        c1h: 'thead__align'}); 
    case 'C24H_ORDER': 
      if(state.c24h === 'thead__align') return Object.assign({}, state, {
        c24h: 'thead__align up'
      })
      if(state.c24h === 'thead__align up') return Object.assign({}, state, {
        c24h: 'thead__align down'})
      return Object.assign({}, state, {
        c24h: 'thead__align'}); 
    case 'C1D_ORDER': 
      if(state.c1d === 'thead__align') return Object.assign({}, state, {
        c1d: 'thead__align up'
      })
      if(state.c1d === 'thead__align up') return Object.assign({}, state, {
        c1d: 'thead__align down'})
      return Object.assign({}, state, {
        c1d: 'thead__align'});
    case 'MINE_ORDER': 
      if(state.mine === 'thead__align') return Object.assign({}, state, {
        mine: 'thead__align up'
      })
      if(state.mine === 'thead__align up') return Object.assign({}, state, {
        mine: 'thead__align down'})
      return Object.assign({}, state, {
        mine: 'thead__align'});
      
    default:
      return state;
  }  
}



const store = createStore(reducer);

store.subscribe(()=>{document.getElementById('sym').className = store.getState().sym})
store.subscribe(()=>{document.getElementById('name').className = store.getState().name})
store.subscribe(()=>{document.getElementById('cap').className = store.getState().cap})
store.subscribe(()=>{document.getElementById('price').className = store.getState().price})
store.subscribe(()=>{document.getElementById('c1h').className = store.getState().c1h})
store.subscribe(()=>{document.getElementById('c24h').className = store.getState().c24h})
store.subscribe(()=>{document.getElementById('c1d').className = store.getState().c1d})
store.subscribe(()=>{document.getElementById('mine').className = store.getState().mine})

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
