import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Boutique-bbless</title>
    </Helmet>
  );
};

export default SEO;
