// import React from 'react';
// // import ReactMarkdown from 'react-markdown';
// import MathJax from 'react-mathjax';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import Layout from 'components/layout';
// import Box from 'components/box';
// import Head from 'components/head';
// import Gallery from 'components/gallery';
// import Modal from 'containers/modal';

import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import Box from '../components/box';

export default function Blog({ data }) {
  return (
    <Layout>
      <Box>
        <h1>Blog</h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 css={css`
              text-decoration: none;
              `}
            >
              {node.frontmatter.date}
            </h3>
            <Link
              to={node.fields.slug}
              css={css`
                /* text-decoration: none; */
                color: inherit;
              `}
            >
              <h2
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >

                </span>
              </h2>
              </Link>
            {
              <p>{node.excerpt}</p>
            }
          </div>
        ))}
        {
        //   data.allMarkdownRemark.edges.map(({ node }) => (
        //   <div key={node.id}>
        //     <h3 css={css`
        //       text-decoration: none;
        //       `}
        //     >
        //       {node.frontmatter.date}
        //     </h3>
        //     <Link
        //       to={node.fields.slug}
        //       css={css`
        //         /* text-decoration: none; */
        //         color: inherit;
        //       `}
        //     >
        //       <h2
        //         css={css`
        //           margin-bottom: ${rhythm(1 / 4)};
        //         `}
        //       >
        //         {node.frontmatter.title}{" "}
        //         <span
        //           css={css`
        //             color: #555;
        //           `}
        //         >
        //
        //         </span>
        //       </h2>
        //       </Link>
        //     {
        //       <p>{node.excerpt}</p>
        //     }
        //   </div>
        // ))
        }
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {public: {eq: true}},
               fileAbsolutePath: {regex: "content/blog/"}}
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC}
//       filter: {fileAbsolutePath: {regex: "content/blog/"  }}
//     ){
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC}
//       filter: {fileAbsolutePath: {regex: "content/blog/"  }}
//     ){
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

// import React from 'react';
// // import ReactMarkdown from 'react-markdown';
// import MathJax from 'react-mathjax';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import Layout from 'components/layout';
// import Box from 'components/box';
// import Head from 'components/head';
// import Gallery from 'components/gallery';
// import Modal from 'containers/modal';
//
// // import Post from 'components/post';
//
//
// // const MathJax = require('react-mathjax')
// const tex = `f(x) = \\int_{-\\infty}^\\infty
//     \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
//     \\,d\\xi`
//
// const input = '# This is a header\n\nAnd this is a paragraph'
//
// // module.exports = () => {
// //     return (
// //         <MathJax.Provider>
// //             <div>
// //                 This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
// //                 And a block one:
// //
// //                 <MathJax.Node formula={tex} />
// //             </div>
// //         </MathJax.Provider>
// //     );
// // }
//
// const Blog = ({ data }) => (
//   <Layout>
//     <Head pageTitle={data.blogJson.title} />
//     <Box>
//       <MathJax.Provider>
//           This is an inline math formula: <MathJax.Node inline formula={'a = b'} />
//           And a block one:
//           <MathJax.Node formula={tex} />
//           <MathJax.Node formula={ `f(x) = \\int_{-\\infty}^\\infty
//               \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
//               \\,d\\xi`} />
//           When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and
//     they are
//       </MathJax.Provider>
//     </Box>
//   </Layout>
// );
//
// Blog.propTypes = {
//   data: PropTypes.object.isRequired,
// };
//
// export default Blog;
//
// export const query = graphql`
//   query BlogQuery {
//     blogJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
