import React from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components"
import PropTypes from 'prop-types';
import Layout from 'components/layout';
// import Box from 'components/box';
// import Img from "gatsby-image";
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

// import Avatar from 'components/avatar'

import avatar from '../../content/images/avatar.jpg';

const Avatar = styled.img`
  height: 40vh;
  border-radius: 2%;
  /* margin: 0; */
`

const Title = styled.h1`
  font-weight: 650;
  font-size: 4rem;
  color: white;

`

const Subtitle = styled.h2`
  font-weight: 350;
  font-size: 2.2rem;
  color: white;
  max-width: 60rem;
  line-height: 1.2;
  margin: 2rem 0rem;
  /* max-height: 30vh; */
`

const Main = styled.div`
  padding: 4rem 4rem;
  a {
    color: #DEE2E6;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`


const Index = ({ data }) => (
  <Layout>
    <Helmet>
      <style>{'body, h1, h2, h3, h4, h5, h6 { background-color: #10202B; color: #DEE2E6; }'}</style>
    </Helmet>
    <Main>
      {
      // <h1>Welcome</h1>
      // <div style={{ height: '10vh' }} />
      // <Avatar fluid={data.avatar.childImageSharp.fluid} />
      }
      <Title>Yuan Chiang</Title>
      <Avatar src={avatar} alt={avatar}/>
      <Subtitle>
        Graduate research assistant at NTU. Amateur popping dancer who is good at molecular dynamics and machine learning.
      </Subtitle>
      <Subtitle style={{ color: '#FFFFFF', fontWeight: 500, backgroundColor: '#AB40DF', padding: 10}}>
        Currently seeking a PhD position in the US
      </Subtitle>
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
    </Main>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
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

const imgQuery = graphql`
  query AvatarImgQuery {
    avatar: file(relativePath: { eq: "./avatar.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
// const Index = ({ data }) => (
//   <Layout>
//     <Box>
//       <Title as="h2" size="large">
//         {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
//       </Title>
//       <Modal>
//         <video
//           src="https://i.imgur.com/gzFqNSW.mp4"
//           playsInline
//           loop
//           autoPlay
//           muted
//         />
//       </Modal>
//     </Box>
//     <Gallery items={data.homeJson.gallery} />
//     <div style={{ height: '50vh' }} />
//   </Layout>
// );
