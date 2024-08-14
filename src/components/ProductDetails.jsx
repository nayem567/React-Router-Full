import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      {state ? (
        <article className="product-details__article">
          <img
            src={state.images[0]}
            alt={state.title}
            className="product-details__image"
          />
          <h2 className="product-details__title">
            <strong>Name: </strong>
            {state.title}
          </h2>
          <p>
            <strong>Category: </strong>
            {state.description}
          </p>
          <p>
            <strong>Brand: </strong>
            {state.brand}
          </p>
          <p>
            <strong>Description: </strong>
            {state.description}
          </p>
          <p>
            <strong>Price: </strong>
            {state.price}
          </p>
          <p>
            <strong>Rating: </strong>
            {state.rating}
          </p>
          <Link className="product__link" to={"/products"}>
            Continue Shopping
          </Link>
        </article>
      ) : (
        <h3>No Product Found</h3>
      )}
    </div>
  );
};

export default ProductDetails;
