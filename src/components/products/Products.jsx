import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../redux/products/products.actions";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
console.log(products)
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <div>
      <h1>hello</h1>
      {products.map(({productName,productPrice, productThumbnail }) => (
        <li>{productName}</li>
      ))}
    </div>
  );
};

export default Products;
