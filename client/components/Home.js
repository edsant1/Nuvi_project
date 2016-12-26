import React from 'react';
import $ from 'jquery';
import SocialMedia from './SocialMedia';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.getTweets = this.getTweets.bind(this);
		this.getFbPosts = this.getFbPosts.bind(this);
		this.getIgPosts = this.getIgPosts.bind(this);
		this.getRedditPosts = this.getRedditPosts.bind(this);
		this.getTumblrPosts = this.getTumblrPosts.bind(this);
		this.state = { socialMediaAct: [], filterPosts: [], };
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
		let tweet = [];
		this.state.socialMediaAct.map( (post) => {
			if(post.provider == "twitter") { 
				tweet.push(
				<SocialMedia username={post.actor_username} content={post.activity_message}
				 date={post.activity_date} platform={post.provider} key={post.id} />
				)
			}
		})
		this.setState({filterPosts: tweet})
	}

	getFbPosts() {
		let fbPost = [];
		this.state.socialMediaAct.map( (post) => {
			if(post.provider == "facebook") { 
				fbPost.push(
				<SocialMedia username={post.actor_username} content={post.activity_message}
				 date={post.activity_date} platform={post.provider} key={post.id} />
				)
			}
		})
		this.setState({filterPosts: fbPost})	
	}

	getIgPosts() {
		let igPost = [];
		this.state.socialMediaAct.map( (post) => {
			if(post.provider == "instagram") { 
				igPost.push(
				<SocialMedia username={post.actor_username} content={post.activity_message}
				 date={post.activity_date} platform={post.provider} key={post.id} />
				)
			}
		})
		this.setState({filterPosts: igPost})			
	}

	getRedditPosts() {
		let rdPost = [];
		this.state.socialMediaAct.map( (post) => {
			if(post.provider == "reddit") { 
				rdPost.push(
				<SocialMedia username={post.actor_username} content={post.activity_message}
				 date={post.activity_date} platform={post.provider} key={post.id} />
				)
			}
		})
		this.setState({filterPosts: rdPost})			
	}	

	getTumblrPosts() {
		let tmblPost = [];
		this.state.socialMediaAct.map( (post) => {
			if(post.provider == "tumblr") { 
				tmblPost.push(
				<SocialMedia username={post.actor_username} content={post.activity_message}
				 date={post.activity_date} platform={post.provider} key={post.id} />
				)
			}
		})
		this.setState({filterPosts: tmblPost})			
	}		

	render() {
		let posts = this.state.filterPosts;
		return(
			<div>
				<div className="center-align">
					<button className="btn" onClick={() => (this.getTweets())}>Twitter</button>
					<button className="btn" onClick={() => (this.getFbPosts())}>FaceBook</button>
					<button className="btn" onClick={() => (this.getIgPosts())}>Instagram</button>
					<button className="btn" onClick={() => (this.getRedditPosts())}>Reddit</button>
					<button className="btn" onClick={() => (this.getTumblrPosts())}>Tumblr</button>
				</div>
				<div className="row">
					{posts}
				</div>
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

