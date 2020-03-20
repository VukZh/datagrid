import React from "react";
import { Provider } from "react-redux";

import Filter from "./Filter";

import DataContainer from "./DataContainer";

import DownloadCSV from "./DownloadCSV";

import { createStore, bindActionCreators, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Form from "react-bootstrap/Form";
import initLocalStorage from "./initLocalStorage";

import "./App.css";

import reducer from "./reducer";

import * as actions from "./actions";

const composeEnhancers = composeWithDevTools({});

const middlewares = [thunkMiddleware];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const { dispatch } = store;

const { set_mode, unset_mode } = bindActionCreators(actions, dispatch);

initLocalStorage();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="form">
          <Form>
            <Form.Check
              onChange={e => {
                e.target.checked ? set_mode() : unset_mode();
              }}
              type="switch"
              id="switchMode"
              label="Set virtualization for a table"
            />
          </Form>
          <DownloadCSV />
        </div>
        <div className="filter__wrapper">
          <Filter />
        </div>

        <DataContainer />
      </div>
    </Provider>
  );
}

export default App;
