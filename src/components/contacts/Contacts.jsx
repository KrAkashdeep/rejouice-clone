// import React from 'react'
import style from "./contacts.module.css";
function Contacts() {
  return (
    <>
      <div className={style.box}>
        <div className={style.top}>
          <h1 className={style.text}>Get in touch.</h1>
          <p className={style.contact}> Contact</p>
        </div>
        <hr className={style.line} />
        <div className={style.bottom}></div>
      </div>
    </>
  );
}

export default Contacts;
