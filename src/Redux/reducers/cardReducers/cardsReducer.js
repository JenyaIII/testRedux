import { ADD_USER } from '../../actions/actionTypes';

const initialState = {
  modalOpen: false,
  users: [
    {
      name: 'Jeka',
      email: '161russ@gmail.com',
      telephone: '+79034851135',
      position: 'Junior Developer',
    },
    {
      name: 'Misha',
      email: 'mmChigorin@gmail.com',
      telephone: '+77785554998',
      position: 'Middle Developer',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    default:
      return state;
  }
}
