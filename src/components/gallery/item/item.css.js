import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ImgFrame = styled.div`
  /* max-width: 29vw; */
  margin: auto auto;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 1rem 0.5rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0rem 1rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
