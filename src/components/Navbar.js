import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import Link from 'gatsby-link';
import '../layouts/index.scss';

class Navbar extends React.Component {


  state = {
    navIsOpen: false
  }

  // rather than binding we can just turn a method into an arrow function.
  // this means we don't have to worry about binding
  // because arrow functions don't care

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }


  componentWillUpdate() {
    if(this.state.navIsOpen) this.setState({ navIsOpen: false });
  }


  render() {


    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <span className="logo"><img className="" src="/static/images/tandem_logo.png" alt="Tandem Logo"/></span>
          </Link>
          <div
            className={`navbar-burger ${this.state.navIsOpen ? 'is-active' : ''}`}
            onClick={this.handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          {/* when active is open */}
          <div className="navbar-end">
            <Link className="navbar-item" to="/">HOME</Link>
            <Link className="navbar-item" to="/">TANDEM APP</Link>
            <Link className="navbar-item" to="/">TANDEM CARD</Link>
            <Link className="navbar-item" to="/">BLOG</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
