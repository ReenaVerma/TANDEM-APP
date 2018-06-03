import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

import Footer from '../components/Footer';
// import MainBody from '../components/MainBody';
// import Terms from '../components/Terms';
import './index.scss';

const Layout = ({ children }) => (
  <div>
    <main>

      {children()}
      <Footer />
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
