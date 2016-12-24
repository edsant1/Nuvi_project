import React from 'react';
import $ from 'jquery';
import Twitter from './Twitter';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.getTweets = this.getTweets.bind(this);
		this.state = { socialMediaAct: [] };
	}

	componentWillMount() {
		$.ajax({
			url: 'https://nuvi-challenge.herokuapp.com/activities',
			type: 'GET',
			dataType: 'JSON'
		}).done( (res) => {
			this.setState({socialMediaAct: res});
		})
	}

	getTweets() {
		let twitterTweet = [];
		this.state.socialMediaAct.map( (tweet) => {
			if(tweet.provider == "twitter") { 
				twitterTweet.push(<Twitter username={tweet.actor_username} content={tweet.activity_message}
				 date={tweet.activity_date} key={tweet.id} />
				)
			}
		})
		return twitterTweet;
	}

	render() {
		return(
			<div>
				<h2>Hello</h2>
				{this.getTweets()}
			</div>
		)
	}
}

export default Home;
//{"id":"4958613633","actor_username":"mitchel.hilpert","actor_description":"Cloned multimedia data-warehouse",
//"actor_name":"Mrs. Domenick Wiza","actor_avator":"https://robohash.org/mitchel.hilpert.png?size=300x300\u0026set=set1"
//,"actor_url":"https://twitter.com/mitchel.hilpert","provider":"twitter",
//"activity_url":"https://twitter.com/mitchel.hilpert/4958613633","activity_latitude":"-0.3097010719843496",
//"activity_longitude":"76.88793327501287","activity_date":"2016-12-22",
//"activity_message":" https://placehold.it/500x500.jpeg/ffffff/000","activity_likes":7,
//"activity_shares":12,"activity_comments":4,"activity_attachment":"https://placehold.it/500x500.jpeg/ffffff/000","activity_attachment_type":"image/jpeg","activity_sentiment":0}

