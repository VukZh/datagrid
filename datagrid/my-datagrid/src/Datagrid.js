import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import Table from 'react-bootstrap/Table';
import numeral from 'numeral';

  
numeral.localeData().delimiters.thousands = ' ';

const Datagrid = ({order_sym,order_name,order_cap,order_price,order_c1h,order_c24h,order_c1d,order_mine,sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order,data}) => {
  const rowData = data.map ((item,ind) => {
    return (
          <tr key = {item.id}>
            <td>{ind + 1}</td>
            <td>{item.symbol}</td>
            <td>{item.name}</td>
            <td>{numeral(item.cap).format('$0,0.00')}</td>
            <td>{numeral(item.price).format('$0,0.00')}</td>
            <td>{numeral(item.c1h).format('0.00%')}</td>
            <td>{numeral(item.c24h).format('0.00%')}</td>
            <td>{numeral(item.c1d).format('0.00%')}</td>
            <td>{item.mine}</td>    
          </tr>
    )
  });
  
  
  return (
    
    <Table striped bordered hover size="sm" className = "height__table">
        <thead className='pointer'>
          <tr>
            <th id='#' className = "thead">#</th>
            <th id='sym' className = {order_sym} onClick={sym_order}>Symbol</th>
            <th id='name' className={order_name} onClick={name_order}>Name</th>
            <th id='cap' className={order_cap} onClick={cap_order}>Market Cap</th>
            <th id='price' className={order_price} onClick={price_order}>Price</th>
            <th id='c1h' className={order_c1h} onClick={c1h_order}>Change 1h</th>
            <th id='c24h' className={order_c24h} onClick={c24h_order}>Change 24h</th>
            <th id='c1d' className={order_c1d} onClick={c1d_order}>Change 7d</th>
            <th id='mine' className={order_mine} onClick={mine_order}>Mineable</th>
          </tr>
        </thead> 
        <tbody>
            {rowData}
        </tbody>
      </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    order_sym: state.order_sym,
    order_name: state.order_name,
    order_cap: state.order_cap,
    order_price: state.order_price,
    order_c1h: state.order_c1h,
    order_c24h: state.order_c24h,
    order_c1d: state.order_c1d,
    order_mine: state.order_mine,
    data: state.data,
  }
}


const mapDispatchToProps = (dispatch) => {
  
  const {sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order} = bindActionCreators (actions, dispatch);
  
    return {
        sym_order,
        name_order,
        cap_order,
        price_order,
        c1h_order,
        c24h_order,
        c1d_order,
        mine_order, 
  } 

}

export default connect(mapStateToProps, mapDispatchToProps)(Datagrid);