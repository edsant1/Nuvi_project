import React from 'react';

class SocialMedia extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="tweet offset-m1 col s12 m5" height="700px">
				<div className="info col s12 m9">
					<h5>Username</h5>
				</div>
				<div className="info col s12 m3">
					<h5>Date</h5>
				</div>
				<div className="tweet-usr col s12 m9">
					<h4 className="tweet-username">{this.props.username}</h4>
				</div>
				<div className="col s12 m3">
					<p className="tweet-date">{this.props.date}</p>
				</div>
				<div className="col s12 m6">
					<h5>Social Media Platform:</h5>
				</div>
				<div className="col s12 m6">
					<h5 className="platform">{this.props.platform}</h5>
				</div>
				<div className="col s12 m12">
					<p className="tweet-content">{this.props.content}</p>
				</div>
			</div>	
		)
	}
}

export default SocialMedia;

//Analysts using our product typically need to know what social media “provider’ it is from
// (e.g. Twitter, Facebook, Instagram, Reddit), the username on that social media site,
// the content of the activity, including media, and when it was posted