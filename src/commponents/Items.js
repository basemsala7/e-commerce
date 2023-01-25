import React from "react";
import style from "../css module/items.module.css";
import image1 from "../images/shop23_home_banner1.jpg";
import image2 from "../images/shop23_home_banner2.jpg";
import image3 from "../images/shop23_home_banner3.jpg";
import image4 from "../images/shop23_home_banner4.jpg";
import image5 from "../images/shop23_home_banner5.jpg";
import image6 from "../images/shop23_home_banner6.jpg";

const Items = () => {
  const elements = [
    {
      id: 1,
      img: image1,
      title: " DISCOUNTS UP TO 70%",
    },
    {
      id: 2,
      img: image2,
      title: "SUMMER CLASSICS",
    },
    {
      id: 3,
      img: image3,
      title: "MOTHER & DAUGHTER",
    },
    {
      id: 4,
      img: image4,
      title: "BABIES OUTFITS",
    },
    {
      id: 5,
      img: image5,
      title: "BABIES DRESSES",
    },
    {
      id: 6,
      img: image6,
      title: "SHOES FOR BABIES",
    },
  ];
  const childDiv = elements.map((ele) => {
    return (
      <div
        className={style.child}
        style={{ backgroundImage: `url("${ele.img}")` }}
        key={ele.id}
      >
        <div> {ele.title}</div>
      </div>
    );
  });
  return (
    <>
      <div className={style.items}>{childDiv}</div>
    </>
  );
};

export default Items;
