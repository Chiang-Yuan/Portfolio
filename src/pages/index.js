import React from 'react';
import { Helmet } from 'react-helmet';
import styled from "styled-components"
import PropTypes from 'prop-types';
import HomeLayout from 'components/homelayout';
// import Box from 'components/box';
// import Img from "gatsby-image";
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

// import Avatar from 'components/avatar'

import avatar from '../../content/images/avatar.jpg';

const Avatar = styled.img`
  height: 40vh;
  border-radius: 2%;
  margin: 0;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 3.75rem;
  color: white;
  max-width: 75rem;
  border-bottom: 1px solid;
`

const Subtitle = styled.h2`
  font-weight: 350;
  font-size: 2rem;
  color: white;
  max-width: 75rem;
  line-height: 1.25;
  margin: 2rem 0rem;
  /* max-height: 30vh; */
`

const Box = styled.div`
  padding: 3rem 3rem;
  a {
    color: #4785E7;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`

const Main = styled.div`
  /* padding: 4rem 4rem; */
  max-width: 80rem;
  a {
    color: #4785E7;
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`

const Index = ({ data }) => (
  <HomeLayout>
    <Box>
      <Title>@Yuan</Title>
      <Avatar src={avatar} alt={avatar}/>
      {
      <Subtitle>
        Molecular Dynamics | Scientific Computing | Multiscale Materials and Mechanics
      </Subtitle>
      // <Subtitle style={{ color: '#FFFFFF', fontWeight: 500, backgroundColor: '#AB40DF', padding: 10}}>
      //   Currently seeking a PhD position in the US
      // </Subtitle>
      }
      <Main
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '30vh' }} />
  </HomeLayout>
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


// const imgQuery = graphql`
//   query AvatarImgQuery {
//     avatar: file(relativePath: { eq: "./avatar.jpg" }) {
//       childImageSharp {
//         fluid(maxHeight: 200) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `


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
