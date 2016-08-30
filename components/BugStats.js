/* component for displaying close count bug */

import React, { Component, PropTypes } from 'react'

class BugStats extends React.Component {
	render(){
		var closedCount = this.props.list.reduce(function(result, bug){
			return bug.isClosed ? ++result : result;
		}, 0);
		return (
			<section className="stats">
				<span className="closed">{closedCount}</span>
				<span>/</span>
				<span>{this.props.list.length}</span>
			</section>
		);
	}
}

export default BugStats