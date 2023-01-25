import React from "react";
import style from "../css module/kidsec.module.css";
const KidsSec = () => {
  return (
    <div className={style.container}>
      <div className={style.child}>
        <h1>Best Collections</h1>
        <p>Selected Products From Famous Brands</p>
      </div>
      <div className={style.child}>
        <div className={style.title}>
          <h3>Boys</h3>
        </div>
      </div>
      <div className={style.child}>
        <div className={style.title}>
          <h3>babies</h3>
        </div>
      </div>
      <div className={style.child}>
        <div className={style.title}>
          <h3>girls</h3>
        </div>
      </div>
    </div>
  );
};

export default KidsSec;
