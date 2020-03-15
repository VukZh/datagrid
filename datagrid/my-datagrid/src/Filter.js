import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import {Row, Col, Form, Button} from 'react-bootstrap';




const Filter = ({mine_filter, ch1h_filter, ch24h_filter, ch1d_filter, name_search}) => {
  
  const handleMineFilter =(e) => mine_filter(e.target.value);
  const handleCh1hFilter =(e) => ch1h_filter(e.target.value);
  const handleCh24hFilter =(e) => ch24h_filter(e.target.value);
  const handleCh1dFilter =(e) => ch1d_filter(e.target.value);
  const handleNameSearch =(e) => name_search(e.target.value.trim('').toLowerCase());
    
  return (
    <div className='wrapper'>

        <Row className='filter'>
            <Col xs={1} ></Col>
            <Col xs={3} >
              <Form.Group as={Row}  >
                <div style = {{display: 'flex', width:'100%'}}>
                  <Form.Control style = {{height: '1.5rem', padding: '0.1rem 0.5rem'}}  placeholder="Search coin..." onChange = {handleNameSearch}/>
                  <Button style = {{height: '1.6rem', padding: '0.1rem 1rem'}} >Search</Button>
                </div>
              </Form.Group>
            </Col>
            <Col xs={2} >Market Cap</Col>
            <Col xs={1} >Price</Col>
            <Col xs={1} >
              <Form.Control as="select" style = {{height: '1.5rem', padding: '0.1rem'}} onChange = {handleCh1hFilter}>
                  <option></option>
                  <option>> 0</option>
                </Form.Control>
            </Col>
            <Col xs={1} >
                  <Form.Control as="select" style = {{height: '1.5rem', padding: '0.1rem'}} onChange = {handleCh24hFilter}>
                  <option></option>
                  <option>> 0</option>
                </Form.Control>
            </Col>
            <Col xs={1} >
                <Form.Control as="select" style = {{height: '1.5rem', padding: '0.1rem'}} onChange = {handleCh1dFilter}>
                  <option></option>
                  <option>> 0</option>
                </Form.Control>
            </Col>
            <Col xs={1} >
                  <Form.Control as="select" style = {{height: '1.5rem', padding: '0.1rem'}} onChange = {handleMineFilter}>
                    <option></option>
                    <option>true</option>
                    <option>false</option>  
                    
                  </Form.Control>
            </Col>
        </Row> 
     
    </div>
  )
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  
  const {mine_filter, ch1h_filter, ch24h_filter, ch1d_filter, name_search} = bindActionCreators (actions, dispatch);
  
    return {
        ch1h_filter,
        ch24h_filter,
        ch1d_filter,
        mine_filter,
        name_search
    } 

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);