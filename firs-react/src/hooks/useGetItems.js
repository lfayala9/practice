import { useState, useEffect } from "react";
import axios from "axios";

const useGetItems = (API) => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const getProducts = async () => {
        await fetch(API)
        .then((res) => res.json())
        .then((response) => {
          setProduct(response);
          setIsLoading(false);
        });
    };
    getProducts();
  }, []);
  
  return products;
};

export default useGetItems;
