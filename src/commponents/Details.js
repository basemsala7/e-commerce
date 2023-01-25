/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { BsCartDash } from "react-icons/bs";
import style from "../css module/details.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
const Details = () => {
  let { ID } = useParams();
  const data = useSelector((state) => state.shose.data);
  const dispatch = useDispatch();
  let element = data.filter((ele) => ele.id == ID);
  let [obj] = element;
  let { id, title, name, image, oldPrice, price } = obj;

  const [count, setCount] = useState(0);
  const [modalToggal, setmodal] = useState(false);

  const alert = useRef();
  const addToCartHandel = () => {
    if (!count) {
      alert.current.style.visibility = "visible";
      alert.current.style.opacity = "1";
    } else {
      alert.current.style.visibility = "hidden";
      alert.current.style.opacity = "0";
      dispatch(addToCart({ ...obj, amount: count }));
      setmodal((pre) => !pre);
      document.getElementById("modal").style.display = "grid";
    }
  };

  const closeHandel = () => {
    setmodal((pre) => !pre);
    document.getElementById("modal").style.display = "none";
  };

  return (
    <div className={style.details}>
      {modalToggal && <Modal close={closeHandel} />}
      <div>
        <img src={image} />
      </div>
      <div>
        <h1>{name} </h1>
        <h3> {title} </h3>
        <span>${oldPrice}</span>
        <span>${price}</span>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
        <p>SKU: 654111995-1-2</p>
        <hr></hr>
        <button onClick={() => setCount((pre) => pre - 1)} disabled={!count}>
          -
        </button>
        <button>{count}</button>
        <button onClick={() => setCount((pre) => pre + 1)}>+</button>

        <button className={style.addCardBtn} onClick={addToCartHandel}>
          <BsCartDash />
          add to cart
        </button>
        <div className={style.alert} ref={alert}>
          <span
            className={style.closebtn}
            onClick={function () {
              alert.current.style.visibility = "hidden";
              alert.current.style.opacity = "0";
            }}
          >
            &times;
          </span>
          <strong>WARMING!</strong> please select the amount of product
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Details;
