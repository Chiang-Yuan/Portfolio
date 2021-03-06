/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';

import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
// import { Global } from "@emotion/core"

import Head from 'components/head';
import Header from 'components/header';
// import MarkdownRender from 'components/markdownrender'

import BlogStyle from './bloglayout.css.js';


export function BlogLayout({ data, children }) {
  return (
    <div>
      <BlogStyle />
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} />
      <MathJax.Provider>
        <div style={{ margin: `auto auto`, maxWidth: 960, padding: `0 0` }}>
          <MathJax.Node formula={``} />
          {children}
          <MathJax.Node formula={``} />
        </div>
      </MathJax.Provider>
    </div>
  )
}

// <MarkdownRender source={children} />


BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const BlogLayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query BlogLayoutWithQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <BlogLayout data={data} {...props} />}
  />
);

BlogLayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogLayoutWithQuery;
