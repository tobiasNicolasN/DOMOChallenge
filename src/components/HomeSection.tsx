import React from "react";
import JoinUs from "./JoinUs";
import style from '../styles/HomeSection.module.css'
import Form from "./Form";

function HomeSection() {
  return (
    <div className={style.container}>
      <JoinUs />
      <Form/>
    </div>
  );
}

export default HomeSection;
