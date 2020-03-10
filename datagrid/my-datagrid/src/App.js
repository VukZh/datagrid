import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div className="App">
        <h1>
            my-datagrid
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>% Change 1h</th>
              <th>% Change 24h</th>
              <th>% Change 7d</th>
              <th>Mineable</th>
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
