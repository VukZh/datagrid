import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import DataContainerSlow from './DataContainerSlow';
import DataContainerFast from './DataContainerFast';

const DataContainer = ({mode}) => {
  
//  console.log('... ' + mode);
  
//  mode = true;

  
if (mode) return (
  <DataContainerFast/>
)
  return (
  <DataContainerSlow/>
)
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  }
}



export default connect(mapStateToProps)(DataContainer);
//export default DataContainer;