import { ON_CAR2GO_REQUEST, ON_CAR2GO_LOADED } from '../../const';

export const onCar2GoRequest = () => {
  return {
    type: ON_CAR2GO_REQUEST,
    car2go: {}
  };
};

export const onCar2GoLoaded = (data) => {
  const { car2go } = data;
  return {
    type: ON_CAR2GO_LOADED,
    car2go
  };
};
