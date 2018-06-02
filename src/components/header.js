import React from 'react';
import Link from 'gatsby-link';

const Header = () => (


  <nav className="navBar">
    <div className="wrapper">
      <div className="logo">rv</div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="label-toggle"></label>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">TANDEM APP</Link></li>
        <li><Link to="/">TANDEM CARD</Link></li>
        <li><Link to="/">BLOG</Link></li>
      </ul>
    </div>
  </nav>



);

export default Header;
