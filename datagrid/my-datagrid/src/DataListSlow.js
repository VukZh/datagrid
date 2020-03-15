import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

import numeral from 'numeral';

  
numeral.localeData().delimiters.thousands = ' ';

const DataListSlow = ({order_sym,order_name,order_cap,order_price,order_c1h,order_c24h,order_c1d,order_mine,sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order,data}) => {
  
  const rowData = data.map ((item,ind) => {
    return (  
          <ListGroup horizontal key = {item.id}>
              <ListGroup.Item className = "col1" as="a">{ind + 1}</ListGroup.Item>
              <ListGroup.Item className = "col2" as="li">{item.symbol}</ListGroup.Item>
              <ListGroup.Item className = "col3">{item.name}</ListGroup.Item>
              <ListGroup.Item className = "col4">{numeral(item.cap).format('$0,0.00')}</ListGroup.Item>
              <ListGroup.Item className = "col5">{numeral(item.price).format('$0,0.00')}</ListGroup.Item>
              <ListGroup.Item className = "col6">{numeral(item.c1h).format('0.00%')}</ListGroup.Item>
              <ListGroup.Item className = "col7">{numeral(item.c24h).format('0.00%')}</ListGroup.Item>
              <ListGroup.Item className = "col8">{numeral(item.c1d).format('0.00%')}</ListGroup.Item>
              <ListGroup.Item className = "col9">{item.mine}</ListGroup.Item>
          </ListGroup>
    )
  });
  
  
  return (
    <div className='wrapper'>
      <ListGroup horizontal className='pointer'>
        <ListGroup.Item className = "thead col1"  id='#'>#</ListGroup.Item>
        <ListGroup.Item className = {order_sym + ' col2'} id='sym' onClick={sym_order}>Symbol</ListGroup.Item>
        <ListGroup.Item className = {order_name + ' col3'} id='name' onClick={name_order}>Name</ListGroup.Item>
        <ListGroup.Item className = {order_cap + ' col4'} id='cap' onClick={cap_order}>Market Cap</ListGroup.Item>
        <ListGroup.Item className = {order_price + ' col5'} id='price' onClick={price_order}>Price</ListGroup.Item>
        <ListGroup.Item className = {order_c1h + ' col6'} id='c1h' onClick={c1h_order}>Change 1h</ListGroup.Item>
        <ListGroup.Item className = {order_c24h + ' col7'} id='c24h' onClick={c24h_order}>Change 24h</ListGroup.Item>
        <ListGroup.Item className = {order_c1d + ' col8'} id='c1d' onClick={c1d_order}>Change 7d</ListGroup.Item>
        <ListGroup.Item className = {order_mine + ' col9'} id='mine' onClick={mine_order}>Mineable</ListGroup.Item>
      </ListGroup>
      {rowData}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataListSlow);