"use client";
import { useEffect, useRef } from "react";
import "./rock.css";

const Rocket = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="rock" ref={cursorRef}>
      <img
        src="https://freesvg.org/img/rocket-312767.png"
        height={"50px"}
        width={"50px"}
      ></img>
    </div>
  );
};

export default Rocket;
