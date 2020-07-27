import React from 'react';
import { css } from "@emotion/core"
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
  /* margin: 0; */
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 3.75rem;
  color: white;
  max-width: 60rem;
  border-bottom: 1px solid;
`

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 2rem;
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
  <HomeLayout>
    <Main>
      <Title>Yuan Chiang</Title>
      <Avatar src={avatar} alt={avatar}/>
      <Subtitle>
        Graduate research assistant at NTU. Amateur popping dancer who is also good at molecular dynamics and machine learning. A perfectionist.
      </Subtitle>
      <Subtitle style={{ color: '#FFFFFF', fontWeight: 500, backgroundColor: '#AB40DF', padding: 10}}>
        Currently seeking a PhD admission in the US
      </Subtitle>
      <div css={css`
        max-width: 60rem;
        `}
      >
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      </div>
    </Main>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
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
