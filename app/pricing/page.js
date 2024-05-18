// pages/pricing.js
import React from "react";
import styles from "./pricing.module.css"; // Use CSS module
import CustomCursor2 from "@/components/customcursor2";
import Navbar from "@/components/Navbar";

const Pricing = () => {
  return (
    <>
      <CustomCursor2 />
      <Navbar />
      <div className={styles.ser}>
        <div className={styles.hello}>
          <form className={styles.form}>
            <h1>EVERYTHING is Negotiable</h1>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="my-3"
            >
              <label htmlFor="email" className="mx-2 my-2">
                Enter your email
              </label>
              <input id="email" type="email" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="my-3"
            >
              <label htmlFor="mobile" className="mx-2 my-2">
                Enter your mobile number
              </label>
              <input id="mobile" type="tel" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="desc" className="mx-2 my-2">
                Enter your query
              </label>
              <input id="desc" type="text" style={{ height: "200px" }} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.svgs}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-chevron-double-down mx-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fillRule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
          <p>Scroll</p>
        </div>
        <div className={styles.colr}></div>
      </div>
    </>
  );
};

export default Pricing;
