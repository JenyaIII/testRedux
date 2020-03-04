export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return 'KEK';
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return alert('UNDEFINED');
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return alert('SAVE ERROR');
  }
};
