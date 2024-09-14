import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

function DataFetchUsingAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // call a backend api, get the results and store it in a variable.
    async function getProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data[0]);
        setProducts(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();

    console.log("Inside useEffect");
    //Run on first render
  }, []);

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <div>
      {products.map((singleProduct) => {
        return (
          <div className="product">
            <img height="100px" width="100px" src={singleProduct.image} />{" "}
            <h3>{singleProduct.title}</h3>
            <p>{singleProduct.description}</p>
            <NavLink to={`product/${singleProduct.id}`}>
              <button>Buy Now</button>
            </NavLink>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );

  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(async () => {
  //   setLoading(true);

  //   try {
  //     const response = await axios.get(`https://fakestoreapi.com/products`);
  //     console.log(response.data);
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Something went wrong!!");
  //   }
  //   setLoading(false);
  // }, []);

  // return loading ? (
  //   <p>Loading..........</p>
  // ) : (
  //   <div>
  //     {product &&
  //       product.map((singleProduct) => {
  //         return (
  //           <div className="product">
  //             <img height="500px" width="500px" src={singleProduct.image} />{" "}
  //             <h3>{singleProduct.title}</h3>
  //             <p>{singleProduct.description}</p>
  //             <hr></hr>
  //           </div>
  //         );
  //       })}
  //   </div>
  // );
}
export default DataFetchUsingAPI;
