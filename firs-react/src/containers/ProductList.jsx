import React from "react";
import Product from "../components/Product";
import useGetItems from "../hooks/useGetItems";
import "../styles/ProductList.scss";


const API = "https://fakestoreapi.com/products?offset=20&limit=12";

const ProductList = () => {
  const products = useGetItems(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
