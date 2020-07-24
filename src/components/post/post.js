// import React from 'react';
// import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
// // import Item from 'components/post/item';
// import { Container } from './post.css';
//
// import Content from './content';
//
// const Post = ({ post }) => (
//   <div>
//     <div>
//       <Content body={post.html} title={post.frontmatter.title} />
//     </div>
//   </div>
// );
//
// Post.propTypes = {
//   post: PropTypes.shape({
//     frontmatter: PropTypes.node,
//     html: PropTypes.node
//   })
// };
//
// export const PostwithQuery = graphql`
//   query($slug: String!) {
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
// // const PostWithQuery = props => (
// //   <StaticQuery
// //     query={graphql`
// //       query PostQuery {
// //         html {
// //           siteMetadata {
// //             siteTitle
// //           }
// //         }
// //       }
// //     `}
// //     render={post => <Post data={post} {...props} />}
// //   />
// // );
// //
// // PostWithQuery.propTypes = {
// //   children: PropTypes.node.isRequired,
// // };
// //
// // export default PostWithQuery;
//
//
//
// // import React from 'react';
// // import { Link } from 'gatsby';
// // import Author from './Author';
// // import Comments from './Comments';
// // import Content from './Content';
// // import Meta from './Meta';
// // import Tags from './Tags';
// // import styles from './Post.module.scss';
// // import type { Node } from '../../types';
// //
// // type Props = {
// //   post: Node
// // };
// //
// // const Post = ({ post }: Props) => {
// //   const { html } = post;
// //   const { tagSlugs, slug } = post.fields;
// //   const { tags, title, date } = post.frontmatter;
// //
// //   return (
// //     <div className={styles['post']}>
// //       <Link className={styles['post__home-button']} to="/">All Articles</Link>
// //
// //       <div className={styles['post__content']}>
// //         <Content body={html} title={title} />
// //       </div>
// //
// //       <div className={styles['post__footer']}>
// //         <Meta date={date} />
// //         {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
// //         <Author />
// //       </div>
// //
// //       <div className={styles['post__comments']}>
// //         <Comments postSlug={slug} postTitle={post.frontmatter.title} />
// //       </div>
// //     </div>
// //   );
// // };
// //
// // export default Post;
