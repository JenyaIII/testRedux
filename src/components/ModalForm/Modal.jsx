import React from 'react';
import styles from './Modal.module.scss';
import AddUserForm from './AddUserForm';

const ModalForm = () => {

  return (
    <div id="openModal" className={styles.modal}>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>Add new user</h3>
            <a href="#close" title="Close" className="close">×</a>
          </div>
          <div className={styles.modalBody}>
            <AddUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
