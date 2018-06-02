import React from 'react';
// import Link from 'gatsby-link';

const MainBody = () => (
  <section>
    <div className="flex-container">
      <div className="flex-item">
        <h1>A cashback credit card for holiday and home</h1>
        <ul className="pros">
          <li>No fees for making purchases abroad</li>
          <li>Nothing added on top of the Mastercard exchange rate</li>
          <li>Manage your holiday spending with realtime in-app notifications</li>
          <li>0.5% cashback on all purchases above £1</li>
          <li>Friendly customer support from anywhere with with in-app chat</li>
        </ul>
        <p>Great the same great rewards on holiday and at home with the Travel Cashback Credit Card.</p>
        <p className="info">See full information</p>

      </div>
      <div className="flex-item">
        <img className="card-image" src="/static/images/travel.png" alt="Tandem Credit Card Image"/>
      </div>
    </div>
  </section>
);

export default MainBody;
