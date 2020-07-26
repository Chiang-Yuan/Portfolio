/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from 'prop-types';

import { StaticQuery, graphql } from 'gatsby';
import { Global } from "@emotion/core"

import Head from 'components/head';
import Header from 'components/header';

import HomeStyle from './homelayout.css.js';

export function HomeLayout({ data, children }) {
  return (
    <div>
      <HomeStyle />
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const HomeLayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query HomeLayout {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <HomeLayout data={data} {...props} />}
  />
);

HomeLayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayoutWithQuery;
