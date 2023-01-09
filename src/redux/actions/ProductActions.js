import { ActionTypes } from '../constants/action-types';
import axios from '../../fakeAPI/axios';

//we make api call before reducer by using middleware thunk
export const fetchProducts = () => {
  return async function (disptch, getState) {
    const response = await axios.get('/products');
    disptch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removedProduct = () => {
  return {
    type: ActionTypes.DELETED_PRODUCT,
  };
};
