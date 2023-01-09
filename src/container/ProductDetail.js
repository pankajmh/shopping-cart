import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removedProduct,
} from '../redux/actions/ProductActions';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.allProducts.selectedProduct);
  console.log(product);
  const dispatch = useDispatch();

  const getSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log('Err - ', err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') getSelectedProduct();
    // console.log('select product useEffect run', product);
    //to unmount selected product once we got back to clear the product state
    return () => {
      dispatch(removedProduct());
    };
  }, [productId]);

  return (
    <div>
      <h1>Product Detail</h1>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductDetail;
