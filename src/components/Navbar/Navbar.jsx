// import React from "react";
import style from "./navbar.module.css";
function Navbar() {
  return (
    <>
      <nav className={style.box}>
        <h2 className={style.name}>The Venture Agency.</h2>
        <h3 className={style.title}>Menu</h3>
      </nav>
    </>
  );
}

export default Navbar;
