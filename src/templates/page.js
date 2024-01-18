import React from 'react';
import Layout from '../components/layout';

const PageTemplate = ({ pageContext }) => {
  const { uri, content } = pageContext;
 console.log("HIHI")
  return (
    <Layout>
      <h1>{uri}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* Add your page content rendering here */}
    </Layout>
  );
};

export default PageTemplate;
