import React from 'react';
import Navbar from '../components/Navbar';
import MainBody from '../components/MainBody';
import Terms from '../components/Terms';
import Helmet from 'react-helmet';


const IndexPage = () => (
  <div>
    <Helmet
      // title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tandem App Code Test' },
        { name: 'keywords', content: 'tandem app, reena verma, mobile banking' }
      ]}
    />
    <Navbar/>
    <MainBody />
    <Terms />
  </div>
);

export default IndexPage;
