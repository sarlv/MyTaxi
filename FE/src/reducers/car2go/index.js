import { ON_CAR2GO_REQUEST, ON_CAR2GO_LOADED } from '../../const';

export const car2go = (state = {}, action) => {
  if(action.type === ON_CAR2GO_REQUEST) {
    return Object.assign({}, state.car2go, {});
  }
  if(action.type === ON_CAR2GO_LOADED) {
    return Object.assign({}, state.car2go, {
      car2go: action.car2go
    });
  }
  return state;
};
