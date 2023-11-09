import React from "react";
import style from "../styles/skills.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills">
      <div id="Skills" className={style.outer_box}>

        <h1 className={style.main_heading}>Technical Skills</h1>


        <div className={style.main_box}>
          {/* all logos start */}
          <div data-aos="flip-left" className="skills-card">
            <img src="./images/js.png" alt="JavaScript" className={style.skills_card_img} />
            <h3 className="skills-card-name">JavaScript</h3>
          </div>

          <div data-aos="flip-left" className="skills-card">
            <img src="./images/ts.png" alt="TypeScript" className={style.skills_card_img} />
            <h3 className="skills-card-name">TypeScript</h3>
          </div>

          <div data-aos="flip-left" className="skills-card">
            <img src="./images/html.png" alt="html" className={style.skills_card_img} />
            <h3 className="skills-card-name">HTML</h3>
          </div>

          <div data-aos="flip-left" className="skills-card">
            <img src="./images/css.png" alt="css" className={style.skills_card_img} />
            <h3 className="skills-card-name">CSS</h3>
          </div>
          <div data-aos="flip-left" className="skills-card">
            <img src="./images/react.png" alt="React" className={style.skills_card_img} />
            <h3 className="skills-card-name">React</h3>
          </div>
          <div data-aos="flip-left" className="skills-card">
            <img src="./images/node.png" alt="Next.js" className={style.skills_card_img} />
            <h3 className="skills-card-name">Node.js</h3>
          </div>

          <div data-aos="flip-left" className="skills-card">
            <img src="./images/ex.png" alt="express" className={style.skills_card_img} />
            <h3 className="skills-card-name">Express</h3>
          </div>
          <div data-aos="flip-left" className="skills-card" >
            <img src="./images/mongodb.png" alt="mongodb" className={style.skills_card_img} />
            <h3 className="skills-card-name">MongoDB</h3>
          </div>

          <div data-aos="flip-left" className="skills-card">
            <img src="./images/git.png" alt="git" className={style.skills_card_img} />
            <h3 className="skills-card-name">Git</h3>
          </div>
          <div data-aos="flip-left" className="skills-card">
            <img src="./images/github.png" alt="github" className={style.skills_card_img} />
            <h3 className="skills-card-name">Github</h3>
          </div>


        </div>
      </div>
    </div>
  );
}
