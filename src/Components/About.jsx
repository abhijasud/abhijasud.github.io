import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../resume/Abhishek-jasud-Resume.pdf";
import { Text } from "@chakra-ui/react";
export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="about section">
      <Text textAlign={'center'} fontSize={'4xl'}>About</Text>
      <div id="about" className={style.about}>
        <div className={style.image}>
          {/* <BookType /> */}
          <img
            src="https://avatars.githubusercontent.com/u/51919527?s=400&u=f05562aecaee5daf3025ad826afebb4237a819f3&v=4"
            alt="profile_img"
            className="home-img"
          />
        </div>
        <div className={style.name}>
          <h1>
            Hello <span id="user-detail-name"><Text>I'm Abhishek Jasud</Text></span>
          </h1>

          <div className={style.flipBox}>
            <div className={style.flip}>
              <div>
                <div style={{ color: "white" }}>Critical Thinker</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Problem Solver</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Goal Oriented</div>
              </div>
            </div>
          </div>
            {/* <h3 id="">About</h3> */}
          <p id="user-detail-intro">
          An aspiring and self motivated full stack web developer with passion for coding and having 1200+ hours of coding experience. I believe in team work makes dream work and working every day to better interpersonal skills. Looking for a challenging SDE role in a growth-oriented organisation.
          </p>

          <div style={{"display":"flex", flexWrap:"nowrap", justifyContent:"center", alignItems:"center"}}>
            {" "}
          <a
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1dCZqBa5QcilG0Pp6OWnLNAg2oNvXcoJj/view?usp=sharing",
                "blank"
                );
              }}
              id="resume-button-2"
              href={Resume}
              download="Abhishek-Jasud-Resume"
              className={style.ResumeBtn}
              >
            <span></span>
            <span></span>
            <span></span> 
            <span></span>
            Resume
          </a>
              {/* </button> */}
            {/*  */}
            <a
              href="https://github.com/abhijasud"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            {/*  */}
            <a
              href="www.linkedin.com/in/indabhii/"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
