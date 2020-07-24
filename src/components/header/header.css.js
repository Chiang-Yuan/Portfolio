import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const Title = styled.div`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;

  ${MEDIA.TABLET`
    font-size: 2rem;
  `};
`;
