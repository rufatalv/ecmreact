import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductStart } from "../../redux/products/products.actions";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsData);
  const { data } = products;
  return (
    <div className="adminProducts">
      <h2>Products</h2>
      <div className="adminProducts-inner">
        {data.map((product, idx) => (
          <div key={idx} className="adminProduct">
            <div className="adminProduct-thumb">
              <img src={product.productThumbnail} alt="" />
            </div>
            <div className="adminProduct-details">
              <p>{product.productName}</p>
              <p>${product.productPrice}</p>
            </div>
            <div className="adminProduct-remove">
              <button
                className="button"
                onClick={() => dispatch(deleteProductStart(product.documentID))}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
