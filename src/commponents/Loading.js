import React from "react";
import style from "../css module/loading.module.css";
import { Fade } from "react-reveal";

const Loading = () => {
  return (
    <div className={style.loading}>
      <Fade left cascade>
        <p>Discover our Arrivals!</p>
      </Fade>{" "}
    </div>
  );
};

export default Loading;
