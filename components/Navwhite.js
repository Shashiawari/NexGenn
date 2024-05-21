import React from "react";
import Link from "next/link";
import Button from "./Button2";
const Navwhite = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm "
        style={{ borderBottom: "2px solid white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-2 text-white" href="#">
            <svg
              width="50"
              height="50"
              viewBox="0 0 832 711"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_139_7)">
                <path
                  d="M497.956 65.9127L488.838 650.017H483.152L122.183 299.34V639.621H0V20.0417H6.00722L366.119 370.076L374.915 78.6666L497.848 65.9127H497.956Z"
                  fill="#231F20"
                />
                <path
                  d="M832 371.362C832 585.927 683.858 710.893 505.679 710.893C304.116 710.893 145.461 551.523 145.461 356.465C145.461 161.406 304.974 0 500.637 0C589.351 0.857401 683.965 41.584 751.01 106.854C713.787 162.37 642.344 182.626 580.769 156.476C553.952 145.115 526.49 139.113 498.921 139.113C392.829 139.113 285.45 229.033 285.45 356.572C285.45 475.322 377.919 572.744 511.579 572.744C609.197 572.744 679.138 522.693 683.858 440.49H506.966V313.702H828.567C830.713 333.636 832 352.713 832 371.362Z"
                  fill="#FA3585"
                />
              </g>
              <defs>
                <clipPath id="clip0_139_7">
                  <rect width="832" height="711" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Nextgen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <label className="hamburger">
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link text-white " href={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " href={"/services"}>
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/projects"} className="nav-link text-white">
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href={"/pricing"}>
                  pricing
                </Link>
              </li>
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navwhite;
