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


const fetchFavorites = () => (dispatch) => {
  return fetch(`https://petster3-back-end.herokuapp.com/favorites/Bob`)
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
    .then(dispatch(add(favorite)))
    // .then((data) => {
    //   // console.log('from add', favo)
    //   dispatch(add(data))
    // });
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
  console.log(favorite)
  dispatch(deletePet(favorite));
  // return fetch(`https://petster3-back-end.herokuapp.com/favorites`, options)
    // .then(dispatch(deleteFavorite(favorite)))
    // .then(dispatch(deleteFavorite(favorite)));
};

export default {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
};