// import React from 'react'
import style from "./explore.module.css";
function Explore() {
  return (
    <>
      <div className={style.box}>
        <h3 className={style.name}>
          Agency & Venture <button className={style.but}>Models</button>
        </h3>
        <h2 className={style.text}>Explore our services</h2>
        <h2 className={style.text}>and engagement models</h2>
      </div>
    </>
  );
}

export default Explore;
