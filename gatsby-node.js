const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (slug !== null && slug !== undefined){
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC}
        filter: {fileAbsolutePath: {regex: "content/blog/"  }}
      ){
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              date
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.fields.slug !== null && node.fields.slug !== undefined && node.fields.title !== "" ){
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-mdx.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
  // console.log(JSON.stringify(result, null, 4))
}


// exports.createPages = async ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: DESC}
//         filter: {fileAbsolutePath: {regex: "content/blog/"  }}
//       ){
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter{
//               date
//             }
//           }
//         }
//       }
//       allMdx(
//         sort: { fields: [frontmatter___date], order: DESC}
//         filter: {fileAbsolutePath: {regex: "content/blog/"  }}
//       ){
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter{
//               date
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     if (node.fields.slug !== null && node.fields.slug !== undefined && node.fields.title !== "" ){
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     }
//   })
//   result.data.allMdx.edges.forEach(({ node }) => {
//     if (node.fields.slug !== null && node.fields.slug !== undefined && node.fields.title !== "" ){
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/blog-mdx.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       })
//     }
//   })
//   // console.log(JSON.stringify(result, null, 4))
// }
