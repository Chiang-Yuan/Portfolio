import React from "react"
import { graphql } from "gatsby"
import Box from '../components/box';
import BlogLayout  from "../components/bloglayout";
import Img from "gatsby-image";

// import MathJax from 'react-mathjax';

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <BlogLayout>
      <Box>
        <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    </BlogLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

// import React from "react"
// import { graphql } from "gatsby"
// // import Post from 'components/post';
//
// export default function BlogPost = ({ data }) => {
//   const { markdownRemark } = data // data.markdownRemark holds your post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   )
// }
//
// BlogPost.propTypes = {
//   data: PropTypes.shape({
//       markdownRemark: PropTypes.node
//     })
// }
//
// export const BlogPostQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `
//
// export default BlogPost


// export const pageQuery = graphql`
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//         date
//         slug
//       }
//       excerpt
//       html
//     }
// }
// `

// export const BlogPostQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `
//
// export default BlogPost

// // @flow strict
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
// import Layout from 'components/layout';
// import Post from 'components/post';
// // import { useSiteMetadata } from '../hooks';
// // import type { MarkdownRemark } from '../types';
//
// // type Props = {
// //   data: {
// //     markdownRemark: Node
// //   }
// // };
//
// const PostTemplate = ({ data }) => {
//   // const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
//   const { frontmatter } = data.markdownRemark;
//   const { title: postTitle, description: postDescription, socialImage } = frontmatter;
//   // const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
//
//   return (
//     // <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage} >
//       <Post post={data.markdownRemark} />
//     // </Layout>
//   );
// };
//
// PostTemplate.propTypes = {
//   data: PropTypes.shape({
//       markdownRemark: PropTypes.node
//     })
// };
//
//
// export const query = graphql`
//   query PostBySlug($slug: String!) {
//     frontmatter(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       fields {
//         slug
//         tagSlugs
//       }
//       frontmatter {
//         date
//         description
//         tags
//         title
//         socialImage
//       }
//     }
//   }
// `;
//
// export default PostTemplate;
