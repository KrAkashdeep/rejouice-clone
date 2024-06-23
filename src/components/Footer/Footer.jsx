// import React from 'react'
import style from "./footer.module.css";
function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.top}>
            <div className={style.left}>
              <p className={style.text}>{`Relax. We've got you.`}</p>
              <button className={style.but}>Take a seat</button>
            </div>
            <div className={style.right}>
              <div className={style.nav}>
                <li>Home</li>
                <li>Work</li>
                <li>About</li>
                <li>Services & Models</li>
                <li>Contact</li>
              </div>
              <div className={style.social}>
                <li>X</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </div>
            </div>
          </div>
          <div className={style.middle}>
            <div className={style.s1}>
              <p>San Diego-California</p>
              <p>Paris-France</p>
            </div>
            <div className={style.right1}>
              <p>biz@rejouice.com</p>
              <p>@2023 legal</p>
            </div>
          </div>
          <div className={style.bottom}>
            <p>rejouice</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
