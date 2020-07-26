import React from 'react';
import Component from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { ImgFrame, Title, Copy } from './item.css';

const Item = ({ title, copy, path, image }) => (
  <figure>
    <Link to={path}>
      <ImgFrame>
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      </ImgFrame>
    </Link>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
