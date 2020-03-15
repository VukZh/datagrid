import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import DataListSlow from './DataListSlow';
import DataListFast from './DataListFast';

const DataList = ({mode}) => {
  
//  console.log('... ' + mode);
  
//  mode = true;

  
if (mode) return (
  <DataListFast/>
)
  return (
  <DataListSlow/>
)
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  }
}



export default connect(mapStateToProps)(DataList);
//export default DataContainer;