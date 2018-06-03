import React from 'react';
import Link from 'gatsby-link';

const Terms = () => (
  <div>
    <div className="section-white-test">
      <div>
        <div className="flex-container-test">
          <div className="flex-item">
            <img className="sub-img" src="/static/images/app.jpg" alt="Tandem Credit Card Image"/>
          </div>
          <div className="flex-item">
            <div>
              <h3 className="test-h3">Tandem Credit Card benefits</h3>
            </div>
            <ul className="test-bullets">
              <li>No fees for making purchases abroad</li>
              <li>Nothing added on top of the Mastercard exchange rate</li>
              <li>Manage your holiday spending with realtime in-app notifications</li>
              <li>0.5% cashback on all purchases above £1</li>
              <li>Friendly customer support from anywhere with with in-app chat</li>
            </ul>
            <p><button className="test">More Info</button></p>
          </div>
        </div>

      </div>
    </div>

    <div className="section-grey-test">
      <div>
        <div className="row">
          <h2 className="test-h2">Representative example</h2>
        </div>
        <div className="flex-container-test">
          <div className="one">
            <p className="percentage-test"><span>18.9%</span></p>
            <p>Annual purchase rate (variable)</p>
          </div>
          <div className="two">
            <p className="percentage-test"><span>18.9%</span></p>
            <p>Representative APR (variable)</p>
          </div>
          <div className="three">
            <p className="percentage-test"><span>£1,200</span></p>
            <p>Based on an assumed credit limit</p>
          </div>
        </div>
        <div className="row">
          <p className="legal">You may be offered a different credit limit or API to that shown here as it depends on your individual circumstances. Subject to eligibility and credit assessment.  For more information read <Link to="/">summary box</Link>, <Link to="/">pre-contract credit information</Link>, <Link to="/">cashback terms</Link> and <Link to="/">terms and conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  </div>

);

export default Terms;
