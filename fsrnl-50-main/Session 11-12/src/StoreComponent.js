import React, { useState, useEffect } from "react";
// import "./StoreComponent.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function StoreComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setLoading(false);
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const getProductByCategory = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      setLoading(false);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      getProductByCategory();
    }
  }, [selectedCategory]);

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <div className="App">
      <select onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
      <div>
        <h2>{selectedCategory && selectedCategory.toUpperCase()}</h2>

        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="product">
                <>
                  <img height="500px" width="500px" src={product.image} />{" "}
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <NavLink to={`product/${product.id}`}>
                    <button>Buy Now</button>
                  </NavLink>
                  <hr></hr>
                </>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default StoreComponent;
