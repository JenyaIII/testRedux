import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import ModalForm from './components/ModalForm/Modal';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'grey' }}>Redux Cards</h1>
        <Cards />
        <div className="createCard">
          <button className="createButton" type="button">
            <a href="#openModal">
              Create card
            </a>
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
