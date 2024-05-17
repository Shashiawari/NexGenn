"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor3 = () => {
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
        width="26"
        height="27"
        viewBox="0 0 46 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5235 7.13511L34.8426 20.7317C38.5065 24.2106 41.2157 26.7846 42.8609 28.8143C43.6828 29.8284 44.2094 30.6717 44.4631 31.3935C44.711 32.0989 44.6922 32.6665 44.4496 33.1778C44.207 33.6892 43.7794 34.0628 43.0762 34.317C42.3567 34.5772 41.3704 34.7028 40.0651 34.7077C37.4524 34.7175 33.745 34.2475 28.7329 33.6106L25.01 33.1375L24.8892 33.1222C23.2872 32.9184 22.3294 32.7965 21.4221 33.065C20.5148 33.3334 19.7775 33.9569 18.5444 34.9995L18.4513 35.0781L15.5855 37.5006C11.7269 40.7622 8.87213 43.1738 6.67477 44.5873C5.57692 45.2934 4.68112 45.7247 3.93583 45.898C3.20762 46.0673 2.64548 45.9865 2.16371 45.6895C1.68194 45.3925 1.35727 44.9265 1.18147 44.1999C1.00155 43.4561 0.984506 42.4621 1.12233 41.164C1.3982 38.5659 2.27066 34.9321 3.45161 30.0197L8.06699 10.8208C8.79066 7.81049 9.32128 5.60895 9.94076 4.07275C10.5585 2.54075 11.2112 1.80836 12.0964 1.54644C12.9816 1.28453 13.9277 1.54387 15.2796 2.49307C16.6352 3.44486 18.2784 5.00323 20.5235 7.13511Z"
          fill="url(#paint0_linear_144_2)"
          stroke="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_144_2"
            x1="1.5"
            y1="6.5"
            x2="46.5"
            y2="42.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0289996" stop-color="#03EBFA" />
            <stop offset="0.9999" stop-color="#1D0DD3" />
            <stop offset="1" stop-color="#7009D7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CustomCursor3;
