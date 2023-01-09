import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts, fetchProducts } from '../redux/actions/ProductActions';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const dispatch = useDispatch();

  // const getProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => {
  //       console.log('Err', err);
  //     });

  //   console.log('Products: ', response.data);
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
