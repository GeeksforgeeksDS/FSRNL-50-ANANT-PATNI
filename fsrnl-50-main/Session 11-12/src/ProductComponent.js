import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function ProductComponent() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(async () => {
    // calls product api
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <img height="500px" width="500px" src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
export default ProductComponent;
