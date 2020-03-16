import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import { FixedSizeList } from 'react-window';

import Table from 'react-bootstrap/Table';
import {Row, Col} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


import numeral from 'numeral';

  
numeral.localeData().delimiters.thousands = ' ';

const DataContainerFast = ({order_sym,order_name,order_cap,order_price,order_c1h,order_c24h,order_c7d,order_mine,sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c7d_order,mine_order,data}) => {
  
  const rowDataFast = ({ index, style }) => (
              <Row style={style} key = {data[index].id * 3}>
                  <Col xs={1} className = {'border'}>{index + 1}</Col>
                  <Col xs={1} className = {'border'}>{data[index].symbol}</Col>
                  <Col xs={2} className = {'border'}>{data[index].name}</Col>
                  <Col xs={2} className = {'border'}>{numeral(data[index].cap).format('$0,0.00')}</Col>
                  <Col xs={1} className = {'border'}>{numeral(data[index].price).format('$0,0.00')}</Col>
                  <Col xs={1} className = {'border'}>{numeral(data[index].c1h).format('0.00%')}</Col>
                  <Col xs={1} className = {'border'}>{numeral(data[index].c24h).format('0.00%')}</Col>
                  <Col xs={1} className = {'border'}>{numeral(data[index].c7d).format('0.00%')}</Col>
                  <Col xs={1} className = {'border'}>{data[index].mine && <div className = 'mining'></div>}</Col>
              </Row>           

  );
  



      const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  
  return (
    <div className='wrapper'>

        <Row className='pointer' key = 'f'>
            <Col xs={1} className = "thead border"  id='#'>#</Col>
            <Col xs={1} className = {order_sym + ' border'} id='sym' onClick={sym_order}>Symbol</Col>
            <Col xs={2} className = {order_name + ' border'} id='name' onClick={name_order}>Name</Col>
            <Col xs={2} className = {order_cap + ' border'} id='cap' onClick={cap_order}>Market Cap</Col>
            <Col xs={1} className = {order_price + ' border'} id='price' onClick={price_order}>Price</Col>
            <Col xs={1} className = {order_c1h + ' border'} id='c1h' onClick={c1h_order}>Change 1h</Col>
            <Col xs={1} className = {order_c24h + ' border'} id='c24h' onClick={c24h_order}>Change 24h</Col>
            <Col xs={1} className = {order_c7d + ' border'} id='c7d' onClick={c7d_order}>Change 7d</Col>
            <Col xs={1} className = {order_mine + ' border'} id='mine' onClick={mine_order}>Mineable</Col>
        </Row>
    

          <FixedSizeList
                    className="List wrapperF"
                    height={window.innerHeight * 0.82}
                    itemCount={data.length}
                    itemSize={25}
                      >
                {rowDataFast} 
          </FixedSizeList>


     
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
    order_c7d: state.order_c7d,
    order_mine: state.order_mine,
    data: state.data,

  }
}

const mapDispatchToProps = (dispatch) => {
  
  const {sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c7d_order,mine_order} = bindActionCreators (actions, dispatch);
  
    return {
        sym_order,
        name_order,
        cap_order,
        price_order,
        c1h_order,
        c24h_order,
        c7d_order,
        mine_order, 
  } 

}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainerFast);