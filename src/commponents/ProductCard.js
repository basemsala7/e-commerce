/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsCartDash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import style from "../css module/products.module.css";

const ProductCard = (props) => {
  const navi = useNavigate();

  return (
    <div
      className={style.productcard}
      onClick={() => navi(`${props.dataSended.id}`)}
    >
      <div className={style.badge}>Hot</div>
      <div className={style.producttumb}>
        <div className={style.overlay}>
          <h3>Quick View</h3>
        </div>
        <img src={props.dataSended.image} alt="" />
      </div>
      <div className={style.productdetails}>
        <span className={style.productcatagory}>{props.dataSended.name}</span>
        <h4>
          <a href="#">{props.dataSended.title}</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        {props.children}
        <div className={style.productbottomdetails}>
          <div className={style.productprice}>
            <small>${props.dataSended.price}</small>${props.dataSended.oldPrice}
          </div>
          <div className={style.productlinks}>
            <BsCartDash
              style={{ fontSize: "25px" }}
              onClick={() => navi(`${props.dataSended.id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
