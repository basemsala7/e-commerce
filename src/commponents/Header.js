/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import Navsaid from "./Navsaid";
import { useState } from "react";
import style from "../css module/header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggel, setToggel] = useState(false);
  const takeToggel = () => {
    setToggel((pre) => !pre);
  };

  const numofpro = useSelector((state) => state.cart.data.length);
  return (
    <>
      <header>
        <div className={style.collaps} onClick={() => setToggel((pre) => !pre)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={style.logo}>Logo</div>

        <div className={style.linksdiv}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className={style.aslink}>
                catogarise <FaAngleDown className={style.arrowicon} />
                <div className={style.dropmenue}>
                  <ul>
                    <li>
                      <Link to="/shose">Shose</Link>
                    </li>
                    <li>
                      <Link to="/">product</Link>
                    </li>
                    <li>
                      <Link to="/">product</Link>
                    </li>
                    <li>
                      <Link to="/">product</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>

        <div className={style.cartdiv}>
          <Link to="/cartList">
            <BsCartDash className={style.cartIcon} />
            <span className={style.numofpro}>{numofpro} </span>
          </Link>
        </div>
      </header>
      <Navsaid toggel={toggel} handeltoggel={takeToggel} />
    </>
  );
};

export default Header;
