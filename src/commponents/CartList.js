/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../css module/cartList.module.css";
import { deletitem } from "../redux/cartSlice";
const CartList = () => {
  let data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  return (
    <div>
      {data.length == 0 ? (
        <h3
          style={{
            textAlign: "center",
            color: "gray",
            padding: "50px 0",
          }}
        >
          Cart is empty{" "}
        </h3>
      ) : (
        data.map((ele) => (
          <div className={style.product} key={ele.id}>
            <img src={ele.image} />
            <h4>{ele.name} </h4>
            <h4>${+ele.price * ele.amount} </h4>
            <button onClick={() => dispatch(deletitem(ele.id))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
