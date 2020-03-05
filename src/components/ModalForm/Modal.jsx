/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openOrCloseModal } from '../../Redux/actions/actions';
import styles from './Modal.module.scss';
import AddUserForm from './AddUserForm';

const ModalForm = () => {
  const modal = useSelector((state) => state.cardsReducer.modalOpen);
  const dispatch = useDispatch();
  console.log('MODALAK', modal)

  const close = styles.modal;
  const open = styles.modalOpen;

  const handleCloseModal = (bool) => {
    dispatch(openOrCloseModal(bool));
  };

  return (
    <div id="openModal" className={modal ? open : close}>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>Add new user</h3>
            <span
              title="Close"
              className={styles.close}
              onClick={() => handleCloseModal(false)}
            >
              ×
            </span>
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
