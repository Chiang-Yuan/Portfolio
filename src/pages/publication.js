import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';

const Publication = ({ data }) => (
  <Layout>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.publicationJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Publication.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publication;

export const query = graphql`
  query PublicationQuery {
    publicationJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
