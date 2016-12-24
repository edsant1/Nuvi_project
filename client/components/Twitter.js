import React from 'react';

class Twitter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="tweet col s12 m4">
					<p className="tweet-username">{this.props.username}</p>
					<p className="tweet-content">{this.props.content}</p>
					<p className="tweet-date">{this.props.date}</p>
				</div>	
			</div>
		)
	}
}

export default Twitter;

//Analysts using our product typically need to know what social media “provider’ it is from
// (e.g. Twitter, Facebook, Instagram, Reddit), the username on that social media site,
// the content of the activity, including media, and when it was posted