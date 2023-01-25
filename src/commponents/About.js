import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaDolly } from "react-icons/fa";
import style from "../css module/about.module.css";

const About = () => {
  return (
    <>
      <div className={style.about}>
        <h3>our Story </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <p>
          “ Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model search for evolved over sometimes by
          accident, sometimes on purpose ”
        </p>
      </div>

      <div className={style.moreAbout}>
        <div>
          <BiSupport className={style.icon} />
          <h3>Online Support 24/7</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <AiOutlineDollarCircle className={style.icon} />
          <h3>100% money back guarantee.</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <FaDolly className={style.icon} />
          <h3>Free Shipping</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
