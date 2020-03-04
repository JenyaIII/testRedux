import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Card.module.scss';
import Loader from '../Loader/Loader';

const Card = ({ users }) => {
  // const userData = (localStorageUsers === 'KEK') ? users : localStorageUsers;
  const loading = useSelector((state) => state.cardsReducer.loading);
  console.log('USERSDATA', users[0]);
  return (
    <>
      {loading ? (<Loader />) : (users[0] && users[0].map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardTitle}>
            <h3>{item.name}</h3>
          </div>
          <div className={styles.cardContent}>
            Email:
            {' '}
            {item.email}
          </div>
          <div className={styles.cardContent}>
            Telephone:
            {' '}
            {item.telephone}
          </div>
          <div className={styles.cardContent}>
            Position:
            {' '}
            {item.position}
          </div>
          <div className={styles.cardButtons}>
            <button type="button">
              Edit
            </button>
            <button type="button">
              Delete
            </button>
          </div>
        </div>
      )))}
    </>
  );
};

export default Card;
