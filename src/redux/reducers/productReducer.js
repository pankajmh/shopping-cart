import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [],
  selectedProduct: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };

    case ActionTypes.DELETED_PRODUCT:
      return { ...state, selectedProduct: {} };

    default:
      return state;
  }
};

export default productReducer;
