// import React from 'react'
import Navbar from "../Navbar/Navbar";
import style from "./mainPage.module.css";
function MainPage() {
  return (
    <>
      <div className={style.main}>
        <div className={style.cursor}>
          <h4>play reel</h4>
        </div>
        <video autoPlay loop muted src="src\assets\video.mp4" />
        <Navbar />
        <div className={style.content}>
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </div>
      </div>
    </>
  );
}

export default MainPage;
