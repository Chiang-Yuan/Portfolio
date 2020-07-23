// @flow strict
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Content.module.scss';

// type Props = {
//   body: string,
//   title: string
// };

const Content = ({ body, title }) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

Content.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
};

export default Content;
