import { ON_MYTAXI_REQUEST, ON_MYTAXI_LOADED } from '../../const';

export const onMyTaxiRequest = () => {
  return {
    type: ON_MYTAXI_REQUEST,
    taxi: {}
  };
};

export const onMyTaxiLoaded = (data) => {
  const { taxi } = data;
  return {
    type: ON_MYTAXI_LOADED,
    taxi
  };
};
