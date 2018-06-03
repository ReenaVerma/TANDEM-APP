import React from 'react';
import Navbar from '../components/test-variant/Navbar';
import MainBody from '../components/test-variant/MainBody';
import Terms from '../components/test-variant/Terms';
import Helmet from 'react-helmet';


const TestPage = () => (

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

export default TestPage;
