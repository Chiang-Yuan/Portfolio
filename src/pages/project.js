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
  }
`;
