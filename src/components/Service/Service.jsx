// import React from 'react'
import style from "./service.module.css";
function Service() {
  return (
    <>
      <div className={style.box}>
        <div className={style.top}>
          <h2 className={style.name}>
            {`Tomorrow's Brands ,Today`}
            <sup>TM</sup>
          </h2>
          <h3 className={style.name}>Paris/San Diego</h3>
        </div>
        <hr />
        <div className={style.middle}>
          <p className={style.para}>
            &nbsp; &nbsp; &nbsp; &nbsp;
            {` We are a venture firm and digital agency. Our mission is to
            transform founder's visions into remarkable brands. Choose
            traditional compensation or an equity offset through our Venture
            Model —  your vision, your decision.`}
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;
