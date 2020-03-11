import React from 'react';

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import Table from 'react-bootstrap/Table';
import numeral from 'numeral';

import reducer from './reducer';
//import {sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order,set_shft,unset_shft} from './actions';

import * as actions from './actions';







numeral.localeData().delimiters.thousands = ' ';




const composeEnhancers = composeWithDevTools({
});

const middlewares = [thunkMiddleware];


const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middlewares),
));

const { dispatch } = store;
                          

const {sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order,set_shft,unset_shft} = bindActionCreators (actions, dispatch);


document.addEventListener('keydown', set_shft);
document.addEventListener('keyup', unset_shft);


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
              <th id='sym' className = 'thead__align' onClick={sym_order}>Symbol</th>
              <th id='name' className='thead__align' onClick={name_order}>Name</th>
              <th id='cap' className='thead__align' onClick={cap_order}>Market Cap</th>
              <th id='price' className='thead__align' onClick={price_order}>Price</th>
              <th id='c1h' className='thead__align' onClick={c1h_order}>Change 1h</th>
              <th id='c24h' className='thead__align' onClick={c24h_order}>Change 24h</th>
              <th id='c1d' className='thead__align' onClick={c1d_order}>Change 7d</th>
              <th id='mine' className='thead__align' onClick={mine_order}>Mineable</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>BTC</td>
              <td>Bitcoin</td>
              <td>{numeral(159657931152.3305).format('$0,0.00')}</td>
              <td>{numeral(8747.27164166).format('$0,0.00')}</td>
              <td>{numeral(0.0238659*0.01).format('0.00%')}</td>
              <td>{numeral(0.225539*0.01).format('0.00%')}</td>
              <td>{numeral(-1.52014*0.01).format('0.00%')}</td>
              <td>true</td>    
            </tr>
            <tr>
              <td>ETH</td>
              <td>Ethereum</td>
              <td>{numeral(24514076946.157574).format('$0,0.00')}</td>
              <td>{numeral(222.938535564).format('$0,0.00')}</td>
              <td>{numeral(-0.292308*0.01).format('0.00%')}</td>
              <td>{numeral(-0.0461942*0.01).format('0.00%')}</td>
              <td>{numeral(-2.25433*0.01).format('0.00%')}</td>
              <td>true</td>    
            </tr>
            <tr>
              <td>XRP</td>
              <td>XRP</td>
              <td>{numeral(10200443740.160034).format('$0,0.00')}</td>
              <td>{numeral(0.232995826622).format('$0,0.00')}</td>
              <td>{numeral(0.0171207*0.01).format('0.00%')}</td>
              <td>{numeral(-0.193865*0.01).format('0.00%')}</td>
              <td>{numeral(-0.732131*0.01).format('0.00%')}</td>
              <td>false</td>    
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default App;
