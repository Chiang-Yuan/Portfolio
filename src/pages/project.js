import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

require(`gatsby-remark-mathjax-ssr/mathjax.css`)

const shortcodes = { Link } // Provide common components here

const Project = ({ data }) => (
  <Layout>
    <Box>
      <h1>{data.researchJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.researchJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <Gallery items={data.researchJson.gallery} />
    <Box>
      <h1>{data.learningJson.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{data.learningJson.content.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </Box>
    <Gallery items={data.learningJson.gallery} />
    <Box>
      <h1>{data.volunteerJson.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.volunteerJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <Gallery items={data.volunteerJson.gallery} />
  </Layout>
);

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const query = graphql`
  query pageQuery {
    researchJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        path
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    volunteerJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        path
        image {
          childImageSharp {
            fluid(maxHeight: 750, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    learningJson {
      title
      content {
        childMdx {
          body
        }
      }
      gallery {
        title
        copy
        path
        image {
          childImageSharp {
            fluid(maxHeight: 750, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
