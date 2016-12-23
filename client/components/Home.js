import React from 'react';
import $ from 'jquery';

class Home extends React.Component {
	constructor(props) {
		super(props);
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

	render() {
		return(
			<div>
				<h2>Hello</h2>
			</div>
		)
	}
}

export default Home;