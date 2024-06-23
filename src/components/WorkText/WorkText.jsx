// import React from 'react'
import style from "./workText.module.css";
function WorkText() {
  return (
    <>
      <div className={style.box}>
        <div className={style.text}>
          <span>We operate on a simple philosophy:</span>
          <span>Quality over quantity.</span>
        </div>
        <hr className={style.line} />
        <div className={style.content}>
          &nbsp; &nbsp; &nbsp; &nbsp; We partner with up to 5 clients each year.
          This allows intense focus on the transformation and launch of yout
          brand by our very best team, which is the only team we have. We
          specialize in working with startups that are revolutionizing their
          industries.
        </div>
      </div>
    </>
  );
}

export default WorkText;
