import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { Row, Col } from "react-bootstrap";

import numeral from "numeral";

numeral.localeData().delimiters.thousands = " ";

const DataContainer = ({
  order_sym,
  order_name,
  order_cap,
  order_price,
  order_c1h,
  order_c24h,
  order_c7d,
  order_mine,
  del_rows,
  sym_order,
  name_order,
  cap_order,
  price_order,
  c1h_order,
  c24h_order,
  c7d_order,
  mine_order,
  data,
  show_column1,
  show_column2,
  show_column3
}) => {
  const arrRow = [];

  const show1h = () => {
    if (show_column1 === "1") {
      return (
        <Col
          xs={1}
          className={order_c1h + " border"}
          id="c1h"
          onClick={c1h_order}
        >
          Change 1h
        </Col>
      );
    }
  };
  const show1 = item => {
    if (show_column1 === "1") {
      return (
        <Col xs={1} className={"border"}>
          {numeral(item.c1h).format("0.00%")}
        </Col>
      );
    }
  };

  const show2h = () => {
    if (show_column2 === "1") {
      return (
        <Col
          xs={1}
          className={order_c24h + " border"}
          id="c24h"
          onClick={c24h_order}
        >
          Change 24h
        </Col>
      );
    }
  };
  const show2 = item => {
    if (show_column2 === "1") {
      return (
        <Col xs={1} className={"border"}>
          {numeral(item.c24h).format("0.00%")}
        </Col>
      );
    }
  };

  const show3h = () => {
    if (show_column3 === "1") {
      return (
        <Col
          xs={1}
          className={order_c7d + " border"}
          id="c7d"
          onClick={c7d_order}
        >
          Change 7d
        </Col>
      );
    }
  };
  const show3 = item => {
    if (show_column3 === "1") {
      return (
        <Col xs={1} className={"border"}>
          {numeral(item.c7d).format("0.00%")}
        </Col>
      );
    }
  };

  const sel_row = e => {
    if (
      e.type === "click" ||
      (e.type === "mouseenter" && localStorage.getItem("mSelect") === "true")
    ) {
      e.target.classList.toggle("rowSet");
      if (!arrRow.includes(e.target.parentNode.getAttribute("at"))) {
        arrRow.push(e.target.parentNode.getAttribute("at"));
      } else {
        const index = arrRow.indexOf(e.target.parentNode.getAttribute("at"));
        arrRow.splice(index, 1);
      }
      let nextNode = e.target.nextSibling;
      while (nextNode) {
        nextNode.classList.toggle("rowSet");
        nextNode = nextNode.nextSibling;
      }
    }

    if (e.type === "mousedown") {
      localStorage.setItem("mSelect", "true");
    }

    if (e.type === "mouseup") {
      localStorage.setItem("mSelect", "false");
    }
  };

  const handleDel = () => {
    del_rows(arrRow);
  };

  const rowData = data.map((item, ind) => {
    return (
      <Row key={data[ind].id} at={data[ind].id}>
        <Col
          xs={1}
          className={"border"}
          onClick={sel_row}
          onMouseEnter={sel_row}
          onMouseDown={sel_row}
          onMouseUp={sel_row}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          {ind + 1}
        </Col>
        <Col xs={1} className={"border"}>
          {item.symbol}
        </Col>
        <Col xs={2} className={"border"}>
          {item.name}
        </Col>
        <Col xs={2} className={"border"}>
          {numeral(item.cap).format("$0,0.00")}
        </Col>
        <Col xs={1} className={"border"}>
          {numeral(item.price).format("$0,0.00")}
        </Col>
        {show1(item)}
        {show2(item)}
        {show3(item)}
        <Col xs={1} className={"border"}>
          {item.mine && <div className="mining"></div>}
        </Col>
      </Row>
    );
  });

  return (
    <div className="wrapper">
      <Row className="pointer" key="s">
        <Col
          xs={1}
          className="thead border del"
          id="#"
          data-title="Delete selected row"
          onClick={handleDel}
        >
          #
        </Col>
        <Col
          xs={1}
          className={order_sym + " border"}
          id="sym"
          onClick={sym_order}
        >
          Symbol
        </Col>
        <Col
          xs={2}
          className={order_name + " border"}
          id="name"
          onClick={name_order}
        >
          Name
        </Col>
        <Col
          xs={2}
          className={order_cap + " border"}
          id="cap"
          onClick={cap_order}
        >
          Market Cap
        </Col>
        <Col
          xs={1}
          className={order_price + " border"}
          id="price"
          onClick={price_order}
        >
          Price
        </Col>
        {show1h()}
        {show2h()}
        {show3h()}
        <Col
          xs={1}
          className={order_mine + " border"}
          id="mine"
          onClick={mine_order}
        >
          Mineable
        </Col>
      </Row>
      <div className="wrapperS">{rowData}</div>
    </div>
  );
};

const mapStateToProps = state => {
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
    show_column1: state.show_column1,
    show_column2: state.show_column2,
    show_column3: state.show_column3
  };
};

const mapDispatchToProps = dispatch => {
  const {
    sym_order,
    name_order,
    cap_order,
    price_order,
    c1h_order,
    c24h_order,
    c7d_order,
    mine_order,
    del_rows
  } = bindActionCreators(actions, dispatch);

  return {
    sym_order,
    name_order,
    cap_order,
    price_order,
    c1h_order,
    c24h_order,
    c7d_order,
    mine_order,
    del_rows
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
