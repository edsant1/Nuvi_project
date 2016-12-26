import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';


class App extends React.Component {
  componentDidMount() {
    window.jQuery('.button-collapse').sideNav();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper black">
            <a href="#!" className="brand-logo center">Nuvi Project</a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <a href="http://github.com/edsant1">by Edwin Santizo</a>
            </ul>
            <ul className="side-nav" id="mobile">
            </ul>
          </div>
        </nav>
          <Home />
        {this.props.children}
      </div>
    )
  }
}

export default App;
