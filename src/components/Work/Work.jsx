// import React from 'react'
import style from "./work.module.css";
function Work() {
  return (
    <>
      <div className={style.box}>
        <div className={style.text}>
          <h2 className={style.leftText}>Transforming visions into brands.</h2>
          <h3 className={style.rightText}>See the work</h3>
        </div>
        <div className={style.container}>
          <div className={style.small}>
            <video
              className={style.vid}
              autoPlay
              loop
              muted
              src="src\assets\video\Website-homepage-Work-01_1.mp4"
            />
          </div>
          <div className={style.small}>
            <video
              className={style.vid}
              autoPlay
              loop
              muted
              src="src\assets\video\Website-homepage-Work-02_1.mp4"
            />
          </div>
          <div className={style.small}>
            <video
              className={style.vid}
              autoPlay
              loop
              muted
              src="src\assets\video\Website-homepage-Work-03_1.mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
