import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchProductStart,
  setProduct,
} from "../../../redux/products/products.actions";
import "./styles.scss";
import { addProduct } from "../../../redux/cart/cart.actions";
const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductDetails = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { documentID, productThumbnail, productName, productPrice, productDescription } =
    product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);
  const handleAddCart = (product) => {
      dispatch(addProduct(product))
  }
  const configAddToCartBtn = {
    type: "button",
  };

  return (
    <div className="productCard">
      <div className="product-modal">
        <div className="product-modal-image-wrapper">
          <img src={productThumbnail} alt="" srcset="" />
        </div>
        <div className="product-modal-details">
          <br />
          {/* <span className="text-subtle">{product.brand}</span> */}
          <h1 className="margin-top-0">{productName}</h1>
          <span dangerouslySetInnerHTML={{ __html: productDescription }}></span>
          <br />
          <br />
          <div className="divider" />
          <br />
          <div>
            <span className="text-subtle">Lens Width and Frame Size</span>
            <br />
            <br />
          </div>
          <br />

          <h1>${productPrice}</h1>
          <div className="product-modal-action">
            <button className="button" onClick={() => {handleAddCart(product)}} type="button">Add to Cart</button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10rem" }}>
        <div className="display-header">
          <h1>Recommended</h1>
          <Link to={"/"}>See All</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
