import React from 'react';
import Link from 'gatsby-link';

const Terms = () => (
  <section className="grey">

    <div>
      <div className="row">
        <h2>Representative example</h2>
      </div>
      <div className="flex-container">
        <div className="one">
          <p>Annual purchase rate (variable)</p>
          <span className="percentage">18.9%</span>
        </div>
        <div className="two">
          <p>Representative APR (variable)</p>
          <span className="percentage">18.9%</span>
        </div>
        <div className="three">
          <p>Based on an assumed credit limit of</p>
          <span className="percentage">£1,200</span>
        </div>
        <div className="four">
          <button>Apply Now</button>
        </div>
      </div>
      <div className="row">
        <p className="legal">You may be offered a different credit limit or API to that shown here as it depends on your individual circumstances. Subject to eligibility and credit assessment.  For more information read <Link to="/">summary box</Link>, <Link to="/">pre-contract credit information</Link>, <Link to="/">cashback terms</Link> and <Link to="/">terms and conditions</Link>.
        </p>
      </div>

    </div>
  </section>
);

export default Terms;
