import React from "react";
// import background from "../../assets/images/headerImg.png";
import background from "../../assets/images/new.jpg";
import profile from "../../assets/images/home-right.png";
import "../headerSection/header.css";
import Typewriter from "typewriter-effect";
import { BsCodeSlash } from "react-icons/bs";
import { RiCodeSSlashFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ projectRef }) => {
  const projectExecuteScroll = () =>
    projectRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  return (
    <React.Fragment>
      <div className="parent-container">
        <div className="img-parent">
          <img src={background} alt="profilePicture" className="into-img" />
        </div>
        <div className="logo">
          <div class="waviy">
            <span className="slash"><RiCodeSSlashFill /></span>
            <span className="k1">K</span>
            <span className="--i:2">e</span>
            <span className="--i:3">y</span>
            <span className="--i:4">u</span>
            <span className="--i:5">r</span>
            <span className="kLast">.</span>
          </div>
          <div className="parent-social-icons">
            <Link to='https://www.linkedin.com/in/er-keyur-mulani-b74943216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <div className="parent-social">
                <RiLinkedinFill />
              </div>
            </Link>
            <Link to='https://github.com/keyur6021'>
              <div className="parent-social">
                <BsGithub />
              </div>
            </Link>
            <Link to='https://twitter.com/Keyurmulani6021?t=33fZPsq-vcyezLESlC7mBg&s=09'>
              <div className="parent-social">
                <RiTwitterXFill />
              </div>
            </Link>
            <Link to='https://www.instagram.com/keyur_patel_6021/?utm_medium=copy_link'>
              <div className="parent-social">
                <LuInstagram />
              </div>
            </Link>
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
          <button className="download-btn" onClick={projectExecuteScroll}>
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
