import React from 'react';

class Instagram extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="gram-post col s6 m6">
					<h4 className="gram-post-username">{this.props.username}</h4>
					<h4 className="provider">{this.props.platform}</h4>
					<p className="gram-post-content">{this.props.content}</p>
					<p className="gram-post-date">{this.props.date}</p>
				</div>	
			</div>
		)
	}
}

export default Instagram;