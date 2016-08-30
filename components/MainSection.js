/*  component for including other sub components */

import React, { Component, PropTypes } from 'react'
import BugStats from './BugStats'
import BugEdit from './BugEdit'
import BugList from './BugList'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  handleAddNewBug(bugName) {
	this.props.actions.addNewBug(bugName)
  }
  handleToggleBug(bug){
	  this.props.actions.toggleBug(bug)
  }

  
  render() {
   
	const { bugs, actions } = this.props
	
	return (
		<div>
			<h1>Bug Tracker</h1>
			<hr />
			<div id="contents">
				<BugStats list={bugs}></BugStats>
				<BugEdit onAddNew={this.handleAddNewBug.bind(this)}></BugEdit>
				<BugList list={bugs} toggle={this.handleToggleBug.bind(this)}></BugList>
			</div>
		</div>
	)
	
  }
}

MainSection.propTypes = {
  bugs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
