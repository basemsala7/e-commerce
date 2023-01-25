import React from "react";
import style from "../css module/products.module.css";
import ProductCard from "./ProductCard";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

const TopProuduct = () => {
  const items = [
    {
      id: 7,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-13-600x600.jpg",
      oldPrice: "150",
      price: "140",
    },
    {
      id: 5,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-12-600x600.jpg",
      oldPrice: "150",
      price: "139",
    },
    {
      id: 6,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-14-600x600.jpg",
      oldPrice: "150",
      price: "139",
    },
    {
      id: 1,
      title: "title of product ",
      name: "product name",
      image:
        "https://www.portotheme.com/wordpress/porto/shop23/wp-content/uploads/sites/95/2019/06/product-16-600x600.jpg",
      oldPrice: "150",
      price: "139",
    },
  ];
  return (
    <>
      <h1 className={style.heading}>top rated products</h1>
      <div className={style.productContainer}>
        {items.map((ele) => (
          <ProductCard dataSended={ele} key={ele.id}>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsStarHalf />
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default TopProuduct;
