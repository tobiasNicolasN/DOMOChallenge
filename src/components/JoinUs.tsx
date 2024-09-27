import React from "react";
import style from '../styles/JoinUs.module.css'

function JoinUs() {
  return (
    <div className={style.container}>
      <button>Welcome to Businezz X</button>
      <h1>
        Join us in growing your <span>business</span>.
      </h1>
      <hr />
      <p>
        Elevate your business with Businezz X, a professional Webflow template.
      </p>
      <button>
        Contact us{" "}
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        }
      </button>
    </div>
  );
}

export default JoinUs;
