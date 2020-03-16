import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import Table from 'react-bootstrap/Table';

const convertToCSV = (objArray) => {
    const array = JSON.parse(objArray);
    let str = '';
    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

const exportCSVFile =(headers, items) => {  
  const arrToCSV = items.concat().map((item,index) => {delete item.id; item.ind = index + 1; return item} );
    arrToCSV.unshift(headers);
    let jsonObject = JSON.stringify(arrToCSV);    
    let csv = convertToCSV(jsonObject);  
    let exportedFilename = 'datagrid.csv';
    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      let link = document.createElement("a");
      if (link.download !== undefined) {
          let url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportedFilename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }    
}




const Download = ({data}) => {
  const download = () => {
    const headers = {
        ind: 'index',
        symbol: "Symbol",
        name: "Name",
        cap: "Market Cap",
        price: "Price",
        c1h: "Change 1h",
        c24h: "Change 24h",
        c7d: "Change 7d",
        mine: "Mineable",
    };
    exportCSVFile(headers, data);
  }

  return (    
    <div className="download-wrapper" data-title="Download this table to CSV File" onClick={download}>
      <p className="CSVicons">.</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(Download);