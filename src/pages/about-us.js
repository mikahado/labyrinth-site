import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const AboutPage = () => {



  return (
    <Layout>
            <div className="title-container">
        <h1 className="title-text">About LRG</h1>
      </div>
      {/* Add your about page content here */}
    </Layout>
  );
};


export default AboutPage;
