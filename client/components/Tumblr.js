import React from 'react';

class Tumblr extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="tumblr-post col s6 m6">
					<h4 className="tumblr-post-username">{this.props.username}</h4>
					<h4 className="provider">{this.props.platform}</h4>
					<p className="tumblr-post-content">{this.props.content}</p>
					<p className="tumblr-post-date">{this.props.date}</p>
				</div>	
			</div>
		)
	}
}

export default Tumblr;