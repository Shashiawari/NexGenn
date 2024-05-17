import React from "react";
import Button from "./button";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm ">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" href={"/home"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 832 711"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_139_7)">
              <path
                d="M368.617 370.151L377.348 80.9276L495.412 68.6789L486.376 647.517H484.167L123.925 297.547L119.683 293.426V299.34V637.121H2.5V22.5417H4.99241L364.376 371.869L368.446 375.825L368.617 370.151Z"
                fill="#231F20"
                stroke="#FA3585"
                stroke-width="5"
              />
              <path
                d="M683.858 437.99H509.466V316.202H826.319C828.315 335.266 829.5 353.522 829.5 371.362C829.5 478.043 792.687 562.258 733.908 619.803C675.113 677.363 594.182 708.393 505.679 708.393C305.473 708.393 147.96 550.12 147.96 356.465C147.96 162.776 306.362 2.50667 500.625 2.5C587.983 3.3479 681.236 43.1866 747.758 107.186C710.908 160.372 641.605 179.597 581.747 154.175L581.745 154.174C554.651 142.696 526.859 136.613 498.921 136.613C391.551 136.613 282.95 227.553 282.95 356.572C282.95 476.74 376.575 575.244 511.579 575.244C560.793 575.244 603.249 562.629 634.058 539.441C664.917 516.215 683.951 482.477 686.353 440.633L686.505 437.99H683.858Z"
                fill="#FA3585"
                stroke="black"
                stroke-width="5"
              />
            </g>
            <defs>
              <clipPath id="clip0_139_7">
                <rect width="832" height="711" fill="white" />
              </clipPath>
            </defs>
          </svg>
          NEXGEN
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{outline:"none",border:"none"}}
        >
          <label class="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                stroke="black"
                className="line2 line-top-bottom2"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path stroke="black" className="line2" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " href={"/home"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href={"/services"}>
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/projects"} className="nav-link ">
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href={"/pricing"}>
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
  );
};

export default Navbar;
