"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
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
    <svg width="30" height="37" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_144_2)">
    <path d="M12.5808 11.7039C14.0203 5.71614 14.74 2.72223 16.9545 2.06699C19.169 1.41176 21.402 3.53201 25.8678 7.77253L40.1869 21.3691C47.4915 28.3051 51.1438 31.7731 49.9013 34.3921C48.6589 37.0112 43.6626 36.3763 33.6699 35.1066L29.947 34.6335C28.2287 34.4152 27.3696 34.306 26.564 34.5444C25.7583 34.7828 25.0969 35.3419 23.7741 36.46L20.9083 38.8824C13.2153 45.3851 9.36886 48.6365 6.90131 47.1151C4.43376 45.5938 5.61099 40.6968 7.96546 30.9028L12.5808 11.7039Z" fill="url(#paint0_linear_144_2)"/>
    <path d="M25.5235 8.13511L39.8426 21.7317C43.5065 25.2106 46.2157 27.7846 47.8609 29.8143C48.6828 30.8284 49.2094 31.6717 49.4631 32.3935C49.711 33.0989 49.6922 33.6665 49.4496 34.1778C49.207 34.6892 48.7794 35.0628 48.0762 35.317C47.3567 35.5772 46.3704 35.7028 45.0651 35.7077C42.4524 35.7175 38.745 35.2475 33.7329 34.6106L30.01 34.1375L29.8892 34.1222C28.2872 33.9184 27.3294 33.7965 26.4221 34.065C25.5148 34.3334 24.7775 34.9569 23.5444 35.9995L23.4513 36.0781L20.5855 38.5006C16.7269 41.7622 13.8721 44.1738 11.6748 45.5873C10.5769 46.2934 9.68112 46.7247 8.93583 46.898C8.20762 47.0673 7.64548 46.9865 7.16371 46.6895C6.68194 46.3925 6.35727 45.9265 6.18147 45.1999C6.00155 44.4561 5.98451 43.4621 6.12233 42.164C6.3982 39.5659 7.27066 35.9321 8.45161 31.0197L13.067 11.8208C13.7907 8.81049 14.3213 6.60895 14.9408 5.07275C15.5585 3.54075 16.2112 2.80836 17.0964 2.54644C17.9816 2.28453 18.9277 2.54387 20.2796 3.49307C21.6352 4.44486 23.2784 6.00323 25.5235 8.13511Z" stroke="black"/>
    </g>
    <defs>
    <filter id="filter0_d_144_2" x="0.231006" y="0.649829" width="55.2094" height="56.1354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2.65"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.746778 0 0 0 0 0.0672224 0 0 0 0 0.916667 0 0 0 0.61 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_144_2"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_144_2" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_144_2" x1="6.5" y1="7.5" x2="51.5" y2="43.5" gradientUnits="userSpaceOnUse">
    <stop offset="0.02" stop-color="#FA0303"/>
    <stop offset="0.466125" stop-color="#D30DA7"/>
    <stop offset="1" stop-color="#7009D7"/>
    </linearGradient>
    </defs>
    </svg>
    
    
    </div>
  );
};

export default CustomCursor;
