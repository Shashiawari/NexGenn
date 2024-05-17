"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor2.module.css";

const CustomCursor2 = () => {
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
    <div className={styles.cursor} ref={cursorRef}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 54 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.24572 1.88142L51.1155 25.85C52.9332 26.7795 52.3538 29.5148 50.3154 29.6276L24.9206 31.0328C23.481 31.1125 22.1956 31.9608 21.5563 33.2532L10.6458 55.3098C9.75908 57.1024 7.08099 56.6274 6.86485 54.6391L1.34682 3.87824C1.17487 2.2965 2.82915 1.15701 4.24572 1.88142Z"
          fill="white"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default CustomCursor2;
