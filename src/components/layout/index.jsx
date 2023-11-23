import React from 'react';

import styles from './layout.module.css';

export const Layout = (props) => {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};
