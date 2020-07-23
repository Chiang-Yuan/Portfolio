import React from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Gallery from 'components/gallery';
import Modal from 'containers/modal';

// import Post from 'components/post';


// const MathJax = require('react-mathjax')
const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

const input = '# This is a header\n\nAnd this is a paragraph'

// module.exports = () => {
//     return (
//         <MathJax.Provider>
//             <div>
//                 This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
//                 And a block one:
//
//                 <MathJax.Node formula={tex} />
//             </div>
//         </MathJax.Provider>
//     );
// }

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={data.blogJson.title} />
    <Box>
      <MathJax.Provider>
          This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
          And a block one:
          <MathJax.Node formula={tex} />
          <MathJax.Node formula={ `f(x) = \\int_{-\\infty}^\\infty
              \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
              \\,d\\xi`} />
      </MathJax.Provider>
    </Box>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    blogJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
