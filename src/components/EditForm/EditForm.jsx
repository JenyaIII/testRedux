import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser, editFormOpen } from '../../Redux/actions/actions';

const EditForm = () => {
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    telephone: '',
    position: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user.id = Date.now();
    dispatch(editUser(user));
    dispatch(editFormOpen(false));
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
