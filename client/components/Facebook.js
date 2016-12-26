import React from 'react';

class Facebook extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="fb-post col s6 m6">
					<h4 className="fb-post-username">{this.props.username}</h4>
					<h4 className="provider">{this.props.platform}</h4>
					<p className="fb-post-content">{this.props.content}</p>
					<p className="fb-post-date">{this.props.date}</p>
				</div>	
			</div>
		)
	}
}

export default Facebook;
