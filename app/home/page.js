"use client";
import "bootstrap/dist/css/bootstrap.css";
import Main from "@/components/Main";
import Contact from "@/components/Services";
import Forms from "@/components/contactform";
import About from "@/components/About";

import Footer from "@/components/Footer";
import CustomCursor from "@/components/customcursor";
export default function Home() {
  return (
    <div className="App">
      <div className="items">
        <img
          src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714377495/6cd59bf8-24c7-4166-a458-a909b0d31dcb.png"
          className="img-1 "
          alt="img1"
        ></img>
        <img
          src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714378919/51bca263-86a5-4661-bfbf-c702feeac7c7.png"
          className="img-2"
          alt="img2"
        ></img>
        <img
          src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714379185/42e705c4-a981-4f17-8cd1-09196f11cae1.png"
          className="img-3"
          alt="img3"
        ></img>
        <img
          src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1714378919/51bca263-86a5-4661-bfbf-c702feeac7c7.png"
          className="img-4"
          alt="img4"
        ></img>
      </div>
      <div className="cont">
        <CustomCursor />
        <Main />
        <About />
        <Contact />

        <Forms />
        <Footer />
      </div>
    </div>
  );
}
