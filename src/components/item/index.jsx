import React from 'react';

import styles from './item.module.css';

export const Item = (props) => {
  return (
    <div className={`${styles.container} ${props.active ? styles._active : ''}`} onClick={props.onClick}>
      <h5>{props.name}</h5>
      <h6>{props.price} Р</h6>
    </div>
  );
};
