"use client"
import React from "react";
import CustomCursord from "@/components/dynamiccur";
import styles from "./ServiceConts.module.css";
import { useRef,useEffect } from "react";

const ServiceConts = ({ title, description }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = container.querySelector(`.${styles.cursor}`);

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX - container.getBoundingClientRect().left}px`;
        cursor.style.top = `${e.clientY - container.getBoundingClientRect().top}px`;
      }
    };

    if (container) {
      container.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", moveCursor);
      }
    };
  }, []);

  return (
    <div className={styles.serviceConts} ref={containerRef}>
      <CustomCursord text={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceConts;
