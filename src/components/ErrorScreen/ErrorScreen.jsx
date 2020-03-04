import React from 'react';
import styles from './ErrorScreen.module.scss';
import background from '../../assets/error.jpeg';

const ErrorScreen = () => (
  <>
    <div className={styles.errorScreen}>
      <div className={styles.errorTitle}>
        <h3>Download users data ERROR !</h3>
      </div>
      <div className={styles.errorContent} />
    </div>
  </>
);

export default ErrorScreen;
