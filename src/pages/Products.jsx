import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products-container">
      <h1>All Products</h1>
      {error && <h2>Products Not Found</h2>}
      {isLoading && <h2>Products are Loading...</h2>}
      {!isLoading && !error && (
        <section className="products">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const {
                id,
                images,
                title,
                description,
                price,
                category,
                rating,
              } = product;
              return (
                <article key={id} className="product">
                  <img src={images[0]} alt={title} className="product_image" />
                  <h2>{title}</h2>
                  <p>
                    <strong>Category: </strong>
                    {category}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {description.substring(0, 100)}...
                  </p>
                  <p>
                    <strong>Price: </strong>
                    {price}
                  </p>
                  <p>
                    <strong>Rating: </strong>
                    {rating}
                  </p>
                  <Link
                    className="product__link"
                    to={`/products/${id}`}
                    state={product}
                  >
                    Show Details
                  </Link>
                </article>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default Products;
