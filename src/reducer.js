export default (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        ...state,
        number: state.number += action.incrementAmount
      }
    default:
      return state;
  }
}