// @flow strict
import React from 'react';
// import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
