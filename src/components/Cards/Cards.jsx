import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Cards.module.scss';
import Card from '../Card/Card';

const Cards = () => {
  const users = useSelector((state) => state.cardsReducer);

  console.log('KEK', users);


  return (
    <div className={styles.cardsWrapper}>
      <Card />
    </div>
  );
};

export default Cards;
