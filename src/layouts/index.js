import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import MainBody from '../components/MainBody';
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainBody />
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
