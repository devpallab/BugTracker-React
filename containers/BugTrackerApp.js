/* main application file */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as BugActions from '../actions'

class BugTrackerApp extends Component {
  render() {
    const { bugs, actions } = this.props
	
    return (
      <div>
        
        <MainSection bugs={bugs} actions={actions} />
      </div>
    )
  }
}

BugTrackerApp.propTypes = {
  bugs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    bugs: state.bugs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BugActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BugTrackerApp)
