import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";

import { Form } from "react-bootstrap";

const ShowCols = ({ show_col1, show_col2, show_col3 }) => {
  const handleShowCol1 = e => show_col1(e.target.checked);
  const handleShowCol2 = e => show_col2(e.target.checked);
  const handleShowCol3 = e => show_col3(e.target.checked);

  return (
    <Form style={{ display: "flex", justifyContent: "space-around" }}>
      <div>Show columns % : </div>
      <Form.Check
        id="checkbox1"
        inline
        label="1 hour"
        type="checkbox"
        onChange={handleShowCol1}
        checked={localStorage.getItem("show1") === "1"}
      />
      <Form.Check
        id="checkbox2"
        inline
        label="24 hours"
        type="checkbox"
        onChange={handleShowCol2}
        checked={localStorage.getItem("show2") === "1"}
      />
      <Form.Check
        id="checkbox3"
        inline
        label="7 days"
        type="checkbox"
        onChange={handleShowCol3}
        checked={localStorage.getItem("show3") === "1"}
      />
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  const { show_col1, show_col2, show_col3 } = bindActionCreators(
    actions,
    dispatch
  );

  return {
    show_col1,
    show_col2,
    show_col3
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCols);
