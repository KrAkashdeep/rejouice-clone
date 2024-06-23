// import React from 'react'
import style from "./seats.module.css";
function Seats() {
  return (
    <>
      <div className={style.box}>
        <video
          className={style.vid}
          autoPlay
          loop
          muted
          src="src\assets\video\RJ-BALL-BLUE-ORANGE-scaled.webm"
        />
      </div>
    </>
  );
}

export default Seats;
