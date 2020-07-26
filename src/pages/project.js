import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Project = ({ data }) => (
  <Layout>
    <Box>
      <h1>Projects</h1>
    </Box>
    <Gallery items={data.projectJson.gallery} />
  </Layout>
);

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const query = graphql`
  query ProjectpageQuery {
    projectJson {
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
  }
`;
