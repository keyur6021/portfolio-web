import React from "react";
// import background from "../../assets/images/headerImg.png";
import background from "../../assets/images/new.jpg";
import profile from "../../assets/images/home-right.png";
import "../headerSection/header.css";
import Typewriter from "typewriter-effect";
import { BsCodeSlash } from "react-icons/bs";

const Header = () => {
  return (
    <React.Fragment>
      <div className="parent-container">
        <div className="img-parent">
          <img src={background} alt="profilePicture" className="into-img" />
        </div>
        <div className="logo">
          <div class="waviy">
            <span className="k1">K</span>
            <span className="--i:2">e</span>
            <span className="--i:3">y</span>
            <span className="--i:4">u</span>
            <span className="--i:5">r</span>
            <span className="kLast">.</span>
          </div>
        </div>

        {/* //!birds animation */}

        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>

        <div className="profile-parent">
          <img src={profile} alt="profile" className="profile" />
        </div>

        <div className="content">
          <div className="main-header">
            <Typewriter
              options={{
                strings: [
                  "Hello, This is Keyur Mulani !!",
                  "HI, I'M A WEB-DEVELOPER",
                ],
                cursor: "👨‍💻",
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
        </div>
        <div class="content1">
          <h2> Frontend-Developer </h2>
          <h2>Frontend-Developer</h2>
        </div>
        <div className="parent-contact">
          <button className="contact-btn"> Contact Us </button>
          <button className="download-btn">
            <span className="parent-code">
              <span> Projects </span> <BsCodeSlash className="code" />
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
