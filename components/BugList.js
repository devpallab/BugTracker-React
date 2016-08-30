/* component for populating bux list */

import React, { Component, PropTypes } from 'react'

import BugItem from './BugItem'

class BugList extends React.Component {
	render (){
	var self = this;
	var BugItems = this.props.list.map(
		bug => (
			<BugItem key={bug.id} bug={bug} toggle={self.props.toggle} >
			</BugItem>
		));
	
	return (
		<section className="list">
			<ol>
				{BugItems}
			</ol>
		</section>
	);
	}
}

export default BugList