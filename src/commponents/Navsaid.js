/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import style from "../css module/verticalNave.module.css";
const Navsaid = ({ toggel, handeltoggel }) => {
  const [open, setopen] = useState(false);
  return (
    <div
      className={style.verticalNav}
      style={{ transform: toggel ? "translateX(0)" : "translateX(-120%)" }}
    >
      <div className={style.after} onClick={handeltoggel}>
        &#10006;
      </div>

      <div className={style.containMenue}>
        <h2>BABY STORE</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link onClick={() => setopen((pre) => !pre)}>
              catogarise <FaAngleDown className={style.arrowicon} />
            </Link>
            <div
              className={style.menue}
              style={{ height: open ? "auto" : "0" }}
            >
              <Link to="/">shose</Link>
              <Link to="/">clothes</Link>
              <Link to="/">clothes</Link>
              <Link to="/">clothes</Link>
            </div>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navsaid;
