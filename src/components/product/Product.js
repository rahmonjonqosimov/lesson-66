import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Loading from "../loading/Loading";

const API_URL = "https://dummyjson.com/products";

const Product = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  let card = data.slice(0, 10)?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.images[0]} alt={el.description} />
      <p className="category">{el.category}</p>
      <h5 className="title">{el.title}</h5>
      <span>
        <IoMdStar />( {el.rating})
      </span>
      <h4 className="brand">{el.brand}</h4>
      <div>
        <h5 className="price">$ {el.price}</h5>
        <button>
          <IoCartOutline />
          Add
        </button>
      </div>
    </div>
  ));
  let item = [
    "All",
    "Milks & Dairies",
    "Coffes & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];
  let items = item?.map((el, inx) => <li key={inx}>{el}</li>);
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="item">
            <h2>Popular Products</h2>
            <ul>{items}</ul>
          </div>
          <div className="wrapper">{card}</div>
        </div>
      </section>
      {loading ? <Loading /> : <></>}
    </>
  );
};

export default Product;
