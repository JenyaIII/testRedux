import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteUser,
  getUsers,
  getUsersLoading,
  openOrCloseModal,
  editUser,
} from '../../Redux/actions/actions';
import styles from './Card.module.scss';
import Loader from '../Loader/Loader';

const Card = () => {
  const loading = useSelector((state) => state.cardsReducer.loading);
  const users = useSelector((state) => state.cardsReducer.data);
  const error = useSelector((state) => state.cardsReducer.usersError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersLoading());
    dispatch(getUsers());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  }

  const removeUser = (id, obj) => {
    dispatch(deleteUser(id, obj));
  };
  const handleOpenEditForm = (item) => {
    dispatch(editUser(item));
  };

  return (
    <>
      {loading ? (<Loader />) : ((users || users[0]).map((item) => (
        <div className={styles.card} key={item.key}>
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
            <button type="button" onClick={() => handleOpenEditForm(item)}>
              Edit
            </button>
            <button type="button" onClick={() => removeUser(item.id, item)}>
              Delete
            </button>
          </div>
        </div>
      )))}
    </>
  );
};

export default Card;
