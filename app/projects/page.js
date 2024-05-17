"use client";
import Navbar from "@/components/Navbar";
import "./page.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/Button2.js";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import CustomCursor3 from "@/components/customcursor3";
import Link from "next/link";
const page = () => {
  return (
    <div className="projects">
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
              <g clip-path="url(#clip0_139_7)">
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
          <label class="hamburger">
          <input type="checkbox"/>
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
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
      <div className="e-card playing">
        <div className="image"></div>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <div className="infotop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="icon"
          >
            <path
              fill="currentColor"
              d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
    4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
    21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
    22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
    17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
    14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
    3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
    19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
    12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
    16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
    15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
    19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
     16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
     20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
            ></path>
          </svg>
          <br />
          PROJECTS
          <br />
          <div className="name">WE MAKE EVERYTHING YOU NEED</div>
        </div>
      </div>
      <section className="projects-list">
        <div className="container grid-container">
          <div className="card card-1">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1715749135/2ec1a020-92c0-4c29-b036-1078327e0d10.png"
              className="img-fluid"
            ></img>
            <p className="mt-3">Portfolios</p>
          </div>

          <div className="card full-height">
            <img
              src="https://marketplace.canva.com/EAFBL8KRmSA/1/0/1131w/canva-white-simple-student-cv-resume-NXs7xSf0K8I.jpg"
              className="img-fluid"
            ></img>
            <p className="mt-3">Resume</p>
          </div>

          <div className="card card-2">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1715751260/53297d93-898f-427b-b955-bc73a979a6b3.png"
              className="img-fluid"
            ></img>
            <p className="mt-3">Buisness</p>
          </div>
          <div className="card card-3">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1715751501/e179651c-7c9b-4095-8c89-1ff3d7a03095.png"
              className="img-fluid"
            ></img>
            <p className="mt-3"> college projects</p>
          </div>
        </div>
      </section>
      <Footer />
      <div>
        {" "}
        <CustomCursor3 />
      </div>
    </div>
  );
};

export default page;
