// import React from 'react'
import style from "./service.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Service() {
  const tl = gsap.timeline({});
  useGSAP(() => {
    tl.from("#name", {
      opacity: 0,
      y: 100,
      // duration: 0.3,
      // delay: 0.5,
      // scale: 0,
      // stagger: 0.3,
      scrollTrigger: {
        trigger: "#box",
        scroller: "body",
        start: "top 70%",
        end: "bottom 0%",
        // markers: true,
        // scrub: 1,
      },
    });
  });
  return (
    <>
      <div className={style.box}>
        <div id="box" className={style.top}>
          <h2 id="name" className={style.name}>
            {`Tomorrow's Brands ,Today`}
            <sup>TM</sup>
          </h2>
          <h3 id="name" className={style.name}>
            Paris/San Diego
          </h3>
        </div>
        <hr />
        <div className={style.middle}>
          <p id="name" className={style.para}>
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
