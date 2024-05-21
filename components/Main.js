import React from "react";
import { signOut } from "next-auth/react";
import Button from "./button";
import Navbar from "./Navbar";
import Link from "next/link";
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
          <button  className="btnsss"><Link style={{textDecoration:"none",color:"white"}} href={"/pricing"}>Try now</Link> </button>
          </div>
    </div>
    </div>
  );
}

export default Main;
