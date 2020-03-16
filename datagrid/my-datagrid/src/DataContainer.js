import React from 'react';
import { connect } from 'react-redux';

import DataContainerSlow from './DataContainerSlow';
import DataContainerFast from './DataContainerFast';

const DataContainer = ({mode}) => {

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
