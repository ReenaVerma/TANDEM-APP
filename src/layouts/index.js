import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import MainBody from '../components/MainBody';
import Terms from '../components/Terms';
import './index.scss';

const Layout = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tandem App Code Test' },
        { name: 'keywords', content: 'tandem app, reena verma, mobile banking' }
      ]}
    />
    <main>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <MainBody />
      <Terms />
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
