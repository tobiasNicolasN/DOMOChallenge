import React from "react";
import style from '../styles/JoinUs.module.css'

function JoinUs() {
  return (
    <div className={style.container}>
      <button className={style.button}>Welcome to Businezz X</button>
      <h1 className={style.h1}>
        Join us in growing your <span className={style.underline}>business</span>.
      </h1>
      <hr className={style.divisor}/>
      <p className={style.p}>
        Elevate your business with Businezz X, a professional Webflow template.
      </p>
      <button className={style.contactButton}>
        Contact us →
      </button>
    </div>
  );
}

export default JoinUs;
