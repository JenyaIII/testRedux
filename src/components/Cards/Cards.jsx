import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Cards.module.scss';
import Card from '../Card/Card';
// import { loadState } from '../../Redux/localStorage';
import { getUsers, getUsersLoading } from '../../Redux/actions/actions';

const Cards = () => {
  // const localUsers = (loadState().users === undefined) ? 'KEK' : loadState().users.cardsReducer.users;
  const users = useSelector((state) => state.cardsReducer.data);
  const error = useSelector((state) => state.cardsReducer.usersError);
  console.log('KEK', users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersLoading());
    dispatch(getUsers());
  }, [dispatch]);


  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className={styles.cardsWrapper}>
      <Card users={users} />
    </div>
  );
};

export default Cards;
