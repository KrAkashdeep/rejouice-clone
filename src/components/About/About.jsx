// import React from 'react'
import style from "./about.module.css";
function About() {
  return (
    <>
      <div className={style.box}>
        <span className={style.text}>{`We're uniquely built`}</span>
        <span className={style.about}>About us</span>
      </div>
    </>
  );
}

export default About;
