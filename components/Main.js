import React from "react";
import { signOut } from "next-auth/react";
import Button from "./button";
import Navbar from "./Navbar";
const Main = () => {
  return (
    <div>
      <div className="main">
        <Navbar/>
        <div className="h1 mx-5">
          <img
            src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714379850/3aa3e7d0-04a5-4b9c-a123-6686dd1b44c1.png"
            className="img-fluid"
          ></img>
          <button  className="btnsss">Try now</button>
          </div>
      </div>
    </div>
  );
};

export default Main;
