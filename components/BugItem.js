/* component for creating li bug list */
import React, { Component, PropTypes } from 'react'


class BugItem extends React.Component {
	
	toggle(){
		this.props.toggle(this.props.bug.id)
	}
	
	render(){
		
			return (
				<li  onClick={this.toggle.bind(this)}>
					{ this.props.bug.isClosed ? <span className="closed">{this.props.bug.name}</span> : <span>{this.props.bug.name}</span>}
				</li>
			)
		
	}
}

export default BugItem