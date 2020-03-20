import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import ShowCols from "./showCols";

import { Row, Col, Form } from "react-bootstrap";

const Filter = ({
  mine_filter,
  ch1h_filter,
  ch24h_filter,
  ch7d_filter,
  name_search,
  show_column1,
  show_column2,
  show_column3,
  sym_select,
  data
}) => {
  const handleMineFilter = e => mine_filter(e.target.value);
  const handleCh1hFilter = e => ch1h_filter(e.target.value);
  const handleCh24hFilter = e => ch24h_filter(e.target.value);
  const handleCh7dFilter = e => ch7d_filter(e.target.value);
  const handleNameSearch = e =>
    name_search(e.target.value.trim("").toLowerCase());
  const handleSymSelect = e => sym_select(e.target.value);

  const searchName = () => {
    return (
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
    );
  };

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

  const show1 = () => {
    if (show_column1 === "1") {
      return <Col xs={1}>{c1h()}</Col>;
    }
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

  const show2 = () => {
    if (show_column2 === "1") {
      return <Col xs={1}>{c24h()}</Col>;
    }
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

  const show3 = () => {
    if (show_column3 === "1") {
      return <Col xs={1}>{c7d()}</Col>;
    }
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

  const currOption = data.map(item => (
    <option value={item.symbol} key={item.id}>
      {item.symbol}
    </option>
  ));
  currOption.unshift(
    <option value="--All--" key="00001">
      --All--
    </option>
  );

  const enumFilter = () => {
    return (
      <Form.Control
        as="select"
        style={{ height: "1.5rem", padding: "0.1rem" }}
        onChange={handleSymSelect}
        value={localStorage.getItem("sym")}
      >
        {currOption}
      </Form.Control>
    );
  };

  const show4 = () => {
    return <Col xs={1}>{enumFilter()}</Col>;
  };

  localStorage.getItem("filter_mine");

  return (
    <div className="wrapper">
      <Row className="filter">
        <Col xs={1}></Col>
        {show4()}
        <Col xs={2}>{searchName()}</Col>
        <Col xs={3} style={{ padding: "0" }}>
          <ShowCols />
        </Col>
        {show1()}
        {show2()}
        {show3()}
        <Col xs={1}>{mine()}</Col>
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
    name_search,
    sym_select
  } = bindActionCreators(actions, dispatch);

  return {
    ch1h_filter,
    ch24h_filter,
    ch7d_filter,
    mine_filter,
    name_search,
    sym_select
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
