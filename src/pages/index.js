import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Welcome to Boutique-bbless</h2>
      <p>Your go-to shop for fashion-forward designs.</p>
      <div>
        <h3>Featured Products</h3>
        <p>Coming Soon...</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
