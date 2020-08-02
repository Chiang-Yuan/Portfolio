import React from "react"
import { graphql } from "gatsby"
import Box from '../components/box';
import BlogLayout  from "../components/bloglayout";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

// import MathJax from 'react-mathjax';
// <MathJax.Provider>
//   <MathJax.Node formula={``} />

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <BlogLayout>
      <Box>
        <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
      </Box>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
