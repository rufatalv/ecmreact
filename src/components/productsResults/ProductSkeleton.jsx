import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton">
      <div className="thumb">
        <Skeleton height={"13rem"} />
      </div>

      <div className="details">
        <ul>
          <li className="details-left">
            <span className="name">
              <Skeleton />
            </span>
            <span className="price">
              <Skeleton />
            </span>
          </li>

          <li>
            <div className="addToCart">
              <Skeleton />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSkeleton;
