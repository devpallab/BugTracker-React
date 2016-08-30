/* component for adding new bug entry input box */

import React, { Component, PropTypes } from 'react'


class BugEdit extends React.Component {
	
	addNew(){  
				 var bugName = this.refs.txtBugName.value;
				 this.props.onAddNew(bugName);			
	}
	render(){
		return (
			<section class="new">
				<label htmlFor="">Bug :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Add New" onClick={this.addNew.bind(this)}/>
			</section>
		);
	}
 }
 
 export default BugEdit