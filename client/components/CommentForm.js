import React from 'react';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<form>
					<input placeholder="comment here"/>
				</form>
				<button className="btn">Submit</button>
			</div>
		)
	}
}

export default CommentForm;