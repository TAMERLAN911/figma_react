import React from "react";
import img from "../../img/Group 1.png";
import css from "./header.module.css";

const Header = () => {
  return (
      <>
    <header>
      <div className={css.icon}>
        <img src={img} alt="logo" />

      </div>
      <div className={css.navbar}>
        <div className={css.nav}></div>
        <a href="0#">Главное</a>
        <a href="0#">О нас</a>
        <a href="0#">Контакты</a>
        
      </div>

    </header>
    <hr />
    </>
  );
};

export default Header;
