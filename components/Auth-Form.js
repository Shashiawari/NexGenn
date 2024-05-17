"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom"; // Correct import needed
import { signIn } from "next-auth/react";

const Form = () => {
  const [switchs, setSwitch] = useState(true);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [sign, setSign] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (switchs) {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (res.error) {
          setErrors(["Invalid Credentials"]);
          return;
        }

        router.replace("/home");
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!email || !password) {
        setErrors(["All fields are necessary."]);
        return;
      }
      if (password.length < 8) {
        setErrors(["Password Should Be atleast 8 Characters"]);
        return;
      }
      try {
        const resUserExists = await fetch("api/userExist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const { exists } = await resUserExists.json();

        if (exists) {
          setErrors(["User already exists."]);
          return;
        }

        // Proceed with registration
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
          const form = event.target;
          form.reset();
          router.push("/home");
          setSign(true);
        } else {
          console.log("User registration failed.");
        }
      } catch (error) {
        console.log("Error during registration: ", error);
      }
    }
  }

  return (
    <div>
      <main className={styles.main}>
        <motion.div
          className="overlay"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
        >
          <h1 className="web">
            NexgeNexgeNexgeNexgeNexgeNexgeNexgeNexgeNexgeNexgeNexgeNexgeNexge
          </h1>
        </motion.div>
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input
                type="checkbox"
                className="toggle"
                onChange={() => setSwitch(!switchs)}
              />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div
                  className={switchs ? "flip-card__front" : "flip-card__back"}
                >
                  <div className="title">{switchs ? "Login" : "Sign Up"}</div>
                  <form
                    className="flip-card__form"
                    onSubmit={handleSubmit} // Call handleSubmit on form submit
                  >
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.length > 0 && (
                      <ul id="form-errors">
                        {errors.map((error, index) => (
                          <li key={index} style={{ fontSize: "10px" }}>
                            {error}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sign?<p>Registration Successful Kindly login</p>:""}
                    <button className="flip-card__btn" type="submit">
                      {switchs ? "Let`s go!" : "Confirm!"}
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Form;
