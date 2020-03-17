import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { Row, Col, Form } from "react-bootstrap";

const Filter = ({
  mine_filter,
  ch1h_filter,
  ch24h_filter,
  ch7d_filter,
  name_search
}) => {
  const handleMineFilter = e => mine_filter(e.target.value);
  const handleCh1hFilter = e => ch1h_filter(e.target.value);
  const handleCh24hFilter = e => ch24h_filter(e.target.value);
  const handleCh7dFilter = e => ch7d_filter(e.target.value);
  const handleNameSearch = e =>
    name_search(e.target.value.trim("").toLowerCase());

  const c1h = () => {
    return (
      <Form.Control
        as="select"
        style={{ height: "1.5rem", padding: "0.1rem" }}
        onChange={handleCh1hFilter}
        value={localStorage.getItem("filter_c1h")} 
      >
        <option value=""></option>
        <option value="1">> 0</option>
      </Form.Control>
    );
  };

  const c24h = () => {
    return (
      <Form.Control
        as="select"
        style={{ height: "1.5rem", padding: "0.1rem" }}
        onChange={handleCh24hFilter}
        value={localStorage.getItem("filter_c24h")} 
      >
        <option value=""></option>
        <option value="1">> 0</option>
      </Form.Control>
    );

    
  };

  const c7d = () => {
    return (
      <Form.Control
        as="select"
        style={{ height: "1.5rem", padding: "0.1rem" }}
        onChange={handleCh7dFilter}
        value={localStorage.getItem("filter_c7d")} 
      >
        <option value=""></option>
        <option value="1">> 0</option>
      </Form.Control>
    );
  };

  const mine = () => {
    return (
      <Form.Control
        as="select"
        style={{ height: "1.5rem", padding: "0.1rem" }}
        onChange={handleMineFilter}
        value={localStorage.getItem("filter_mine")} 
      >
        <option value=""></option>
        <option value="true">true</option>
        <option value="false">false</option>
      </Form.Control>
    );
  };

  localStorage.getItem("filter_mine");

  return (
    <div className="wrapper">
      <Row className="filter">
        <Col xs={1}></Col>
        <Col xs={3}>
          <Form.Group as={Row}>
            <div style={{ display: "flex", width: "100%" }}>
              <Form.Control
                style={{ height: "1.5rem", padding: "0.1rem 0.5rem" }}
                placeholder="Search coin..."
                onChange={handleNameSearch}
                value={localStorage.getItem("filter_name")}
              />
            </div>
          </Form.Group>
        </Col>
        <Col xs={2}></Col>
        <Col xs={1}></Col>
        <Col xs={1}>{c1h()}</Col>
        <Col xs={1}>
        {c24h()}
        </Col>
        <Col xs={1}>
        {c7d()}
        </Col>
        <Col xs={1}>
          {mine()}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  const {
    mine_filter,
    ch1h_filter,
    ch24h_filter,
    ch7d_filter,
    name_search
  } = bindActionCreators(actions, dispatch);

  return {
    ch1h_filter,
    ch24h_filter,
    ch7d_filter,
    mine_filter,
    name_search
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
