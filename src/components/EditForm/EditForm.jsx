import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Redux/actions/actions';

const EditForm = () => {
  const currentUser = useSelector((state) => state.cardsReducer.currentUser);
  const [user, setUser] = useState(currentUser[0]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user.id = Date.now();
    dispatch(updateUser(user));
    setUser({
      id: null,
      name: '',
      email: '',
      telephone: '',
      position: '',
    });
  };

  const formList = [
    { name: 'name' },
    { name: 'email' },
    { name: 'telephone' },
    { name: 'position' },
  ];
  console.log('kek', user);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          {formList.map((item) => (
            <div className="input-field" key={item.name}>
              <div className="labelBlock">
                <label>{item.name}</label>
              </div>
              <input
                type="text"
                name={item.name}
                value={user[item.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div>
            <button type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
