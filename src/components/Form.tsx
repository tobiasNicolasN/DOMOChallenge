import React from "react";
import style from "../styles/Form.module.css";

function Form() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <button className={style.button}>Book your free consultation</button>
        <h2 className={style.title}>Get a free consultation</h2>
        <div className={style.inputs}>
          <input className={style.input} placeholder="Name" type="text" />
          <input className={style.input} placeholder="contact@email.com" type="text" />
        </div>
        <textarea className={style.textArea} placeholder="Please type your message here..."></textarea>
        <button className={style.submitButton}>Get in Touch</button>
      </form>
    </div>
  );
}

export default Form;
