import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { openOrCloseModal } from './Redux/actions/actions';
import Cards from './components/Cards/Cards';
import ModalForm from './components/ModalForm/Modal';

function App() {
  const modal = useSelector((state) => state.cardsReducer.modalOpen);
  const dispatch = useDispatch();

  const handleOpenModal = (bool) => {
    dispatch(openOrCloseModal(bool));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'grey' }}>Redux Cards</h1>
        <Cards />
        <div className="createCard">
          <button
            className="createButton"
            type="button"
            onClick={() => handleOpenModal(true)}
          >
            Create card
          </button>
        </div>
        <div>
          <ModalForm />
        </div>
      </div>
    </div>
  );
}

export default App;
