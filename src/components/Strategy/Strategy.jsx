// import React from 'react'
import style from "./strategy.module.css";
function Strategy() {
  return (
    <>
      <div className={style.box}>
        <div className={style.title}>
          <span>Strategy & emotion.</span>
          <span>You need both.</span>
        </div>
        <hr className={style.line} />
        <div className={style.content}>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          {`Data matters, yet it's the emotion that drives buying decisions. We don't believe in 'one size fits all.' We craft unique brand experiences that deepluy resonate with your audience and boost your KPIs.`}
        </div>
      </div>
    </>
  );
}

export default Strategy;
