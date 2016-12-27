import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this);
	}

	addComment(e) {
		e.preventDefault();
		let content = this.refs.content.value
		this.refs.form.reset();
		this.props.addCommentContent(content);
	}

	render() {
		return (
			<div>
				<form ref="form"className="col s12 m9" onSubmit={this.addComment}>
					<input placeholder="comment here" ref="content"/>
				</form>
				<button className="col s1 m3" onClick={this.addComment}>Submit</button>
			</div>
		)
	}
}

export default CommentForm;