import { ON_MYTAXI_REQUEST, ON_MYTAXI_LOADED } from '../../const';

export const mytaxi = (state = {}, action) => {
  if(action.type === ON_MYTAXI_REQUEST) {
    return Object.assign({}, state.taxi, {});
  }
  if(action.type === ON_MYTAXI_LOADED) {
    return Object.assign({}, state.taxi, {
      taxi: action.taxi
    });
  }
  return state;
};
