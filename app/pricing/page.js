"use client";
import React, { useState } from "react";
import styles from "./pricing.module.css"; // Use CSS module
import CustomCursor2 from "@/components/customcursor2";
import Navbar from "@/components/Navbar";

const Pricing = () => {
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [query, setQuery] = useState();
  const [sent, setsent] = useState(false);
  const [errors, setErrors] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !query || !number) {
      setErrors(["All fields are necessary."]);
      return;
    }

    try {
      // Proceed with sending email
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, email, query }),
      });

      if (res.ok) {
        const form = event.target;
        form.reset();
        setsent(true);
      } else {
        console.log("Could not send");
      }
    } catch (error) {
      console.log("Could not send ", error);
    }
  }
  return (
    <>
      <CustomCursor2 />
      <Navbar />
      <div className={styles.ser}>
        <div className={styles.hello}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>EVERYTHING is Negotiable</h1>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="my-3"
            >
              <label htmlFor="email" className="mx-2 my-2">
                Enter your email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="my-3"
            >
              <label htmlFor="mobile" className="mx-2 my-2">
                Enter your mobile number
              </label>
              <input
                id="mobile"
                type="tel"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="desc" className="mx-2 my-2">
                Enter your query
              </label>
              <input
                id="desc"
                type="text"
                style={{ height: "200px" }}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            {sent && (
              <p className="text-center my-3">
                Sent successfully our executive will contact you soon
              </p>
            )}
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
