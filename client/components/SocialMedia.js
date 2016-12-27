import React from 'react';
import CommentForm from './CommentForm'

class SocialMedia extends React.Component {
	constructor(props) {
		super(props);
		this.toggleLike = this.toggleLike.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.addCommentContent = this.addCommentContent.bind(this);
		this.state = { like: true, form: false, comments: [], id: 0 };
	}

	toggleLike() {
		this.setState({ like: !this.state.like });
	}

	toggleForm() {
		this.setState({ form: !this.state.form });
	}

	addCommentContent(comment) {
		let commentCounter = ++this.state.id;
		this.setState({ comments: [{comment, commentCounter}, ...this.state.comments], form: false });
	}

	render() {
		const displayComment = this.state.comments.map( (comment) => {
			return (
				<div className="comment-div col s12 m8" key={comment.commentCounter}><h5>{comment.comment}</h5></div>
			);
		});
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
					<hr />
				</div>
				<div className="like-icon col s6 m8">
					<i className="material-icons" onClick={this.toggleLike}>{ this.state.like ? 'favorite_border' : 'favorite' }</i>
				</div>
				<div className="comment-btn col s6 m2">
					<p className="btn blue" onClick={this.toggleForm}>Comment</p>
				</div>
				{displayComment}
				{this.state.form ? <div className="offset-m1 col m11"><CommentForm addCommentContent={this.addCommentContent} form={this.state.form}/></div> : null }
			</div>	
		)
	}
}

export default SocialMedia;
