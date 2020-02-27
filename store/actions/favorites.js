const get = (payload) => {
  return {
    type: 'FETCH_FAVORITES',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_FAVORITE',
    payload,
  };
};

const deletePet = (payload) => {
  return {
    type: 'DELETE_FAVORITE',
    payload,
  };
};


const fetchFavorites = (user) => (dispatch) => {
  return fetch(`https://petster3-back-end.herokuapp.com/favorites/${user}`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addFavorite = (favorite) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(favorite),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`https://petster3-back-end.herokuapp.com/favorites`, options)
  .then(dispatch(add(favorite)));
};

const deleteFavorite = (favorite) => (dispatch) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(favorite),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`https://petster3-back-end.herokuapp.com/favorites`, options)
  .then(dispatch(deletePet(favorite)))
};

export default {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
};