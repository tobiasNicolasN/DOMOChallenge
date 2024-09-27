import React from "react";
import JoinUs from "./JoinUs";
import style from '../styles/HomeSection.module.css'

function HomeSection() {
  return (
    <div className={style.container}>
      <JoinUs />
      <div>
        <button>Book your free consultation</button>
        <h2>Get a free consultation</h2>
        <form>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <textarea></textarea>
          <button>Get in Touch</button>
        </form>
      </div>
    </div>
  );
}

export default HomeSection;
