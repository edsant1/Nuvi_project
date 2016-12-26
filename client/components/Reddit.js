import React from 'react';

class Reddit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="reddit-post col s6 m6">
					<h4 className="reddit-post-username">{this.props.username}</h4>
					<h4 className="provider">{this.props.platform}</h4>
					<p className="reddit-post-content">{this.props.content}</p>
					<p className="reddit-post-date">{this.props.date}</p>
				</div>	
			</div>
		)
	}
}

export default Reddit;