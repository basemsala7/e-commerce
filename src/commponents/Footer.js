import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import style from "../css module/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1>TIME TO MOVE ON TO INDIVIDUAL SOLUTIONS.</h1>
          <FaFacebook className={style.socialIcon} />
          <FaInstagram className={style.socialIcon} />
          <FaWhatsapp className={style.socialIcon} />
        </div>
        <div>
          <h3>CONTACT US</h3>
          <div className={style.wrap}>
            <GrLocation />
            <span> 27 Division St, New York, NY 10002, USA</span>
          </div>

          <div className={style.wrap}>
            <MdOutlineAlternateEmail />
            <span> zeptech@mailexample.com </span>
          </div>

          <div className={style.wrap}>
            <BsTelephoneInbound />
            <span> +1 800 123 456 789</span>
          </div>
        </div>

        <div>
          <h3>SUBSCRIBE</h3>
          <p>Stay always in touch! Subscribe to our newsletter.</p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button className={style.footerBtn}>subscripe</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
