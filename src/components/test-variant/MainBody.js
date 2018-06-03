import React from 'react';
// import Link from 'gatsby-link';

const MainBody = () => (

  <div className="section-header">
    <div className="flex-container">
      <div className="flex-item">
        <h1 className="test-h1">A cashback credit card for holiday and home</h1>

        <p className="test-h2">Great the same great rewards on holiday and at home with the Travel Cashback Credit Card.</p>
        <p><button className="test">Apply Now</button></p>

        {/* <p className="info"><Link to="">See full information</Link></p> */}

      </div>
      <div className="flex-item">
        <img className="card-only" src="/static/images/card_only.png" alt="Tandem Credit Card Image"/>
      </div>
    </div>
  </div>
);

export default MainBody;
