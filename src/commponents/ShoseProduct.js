import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../css module/products.module.css";
import sniper from "../css module/sniper.module.css";
import ProductCard from "./ProductCard";
import { getShose } from "../redux/shoseSlice";
const ShoseProduct = () => {
  const loading = useSelector((state) => state.shose.loading);
  const data = useSelector((state) => state.shose.data);
  const dispatch = useDispatch();

  useEffect(() => {
    let subscribe = false;
    if (!subscribe) {
      dispatch(getShose());
    }

    return () => {
      subscribe = true;
    };
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className={sniper.container}>
          <div className={sniper.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : data.length === 0 ? (
        <h3 className={style.error}>No items to show</h3>
      ) : (
        <div>
          <h1 className={style.heading}>shose products</h1>
          <div className={style.productContainer}>
            {data.map((ele) => (
              <ProductCard dataSended={ele} key={ele.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoseProduct;
