import React from 'react';
import styles from './Card.module.scss';

const Card = ({ users }) => {
  return (
    <>
      {users.map((item) => (
        <div className={styles.card} key={item.name}>
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
      ))}
    </>
  );
};

export default Card;
