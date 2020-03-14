import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import { FixedSizeList } from 'react-window';

import Table from 'react-bootstrap/Table';
import numeral from 'numeral';

  
numeral.localeData().delimiters.thousands = ' ';

const DatagridFast = ({order_sym,order_name,order_cap,order_price,order_c1h,order_c24h,order_c1d,order_mine,sym_order,name_order,cap_order,price_order,c1h_order,c24h_order,c1d_order,mine_order,data}) => {
  
  const rowData = data.map ((item,ind) => {
    return (
        <tbody>
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
          </tbody>

    )
  });
  
  const rowDataFast = ({ index, style }) => (
      <div>
          <tr key = {data[index].id} style={style}>
            <td className = "col1">{index + 1}</td>
            <td className = "col2">{data[index].symbol}</td>
            <td className = "col3">{data[index].name}</td>
            <td className = "col4">{numeral(data[index].cap).format('$0,0.00')}</td>
            <td className = "col5">{numeral(data[index].price).format('$0,0.00')}</td>
            <td className = "col6">{numeral(data[index].c1h).format('0.00%')}</td>
            <td className = "col7">{numeral(data[index].c24h).format('0.00%')}</td>
            <td className = "col8">{numeral(data[index].c1d).format('0.00%')}</td>
            <td className = "col9">{data[index].mine}</td>    
          </tr>
       </div>            

  );
  
  return (
    
    <Table striped bordered hover size="sm" className = "height__table">
        <thead className='pointer'>
          <tr>
            <th id='#' className = "thead col1">#</th>
            <th id='sym' className = {order_sym + ' col2'} onClick={sym_order}>Symbol</th>
            <th id='name' className={order_name + ' col3'} onClick={name_order}>Name</th>
            <th id='cap' className={order_cap + ' col4'} onClick={cap_order}>Market Cap</th>
            <th id='price' className={order_price + ' col5'} onClick={price_order}>Price</th>
            <th id='c1h' className={order_c1h + ' col6'} onClick={c1h_order}>Change 1h</th>
            <th id='c24h' className={order_c24h + ' col7'} onClick={c24h_order}>Change 24h</th>
            <th id='c1d' className={order_c1d + ' col8'} onClick={c1d_order}>Change 7d</th>
            <th id='mine' className={order_mine + ' col9'} onClick={mine_order}>Mineable</th>
          </tr>
        </thead> 

          <FixedSizeList
              className="List"
              height={780}
              itemCount={data.length}
              itemSize={49}
              width={1823}
                >
          {rowDataFast}
      </FixedSizeList>

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

export default connect(mapStateToProps, mapDispatchToProps)(DatagridFast);