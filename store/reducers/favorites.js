export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES':
      return action.payload;
    case 'ADD_FAVORITE':
      if(!state.includes(action.payload)){
        return [...state, action.payload];
      } else {
        return state;
      }
    case 'DELETE_FAVORITE':
      const modifiedState = state.filter(pet => pet.petfinderid !== action.payload.petfinderid); 
      return modifiedState;
    default:
      return state;
  }
}

