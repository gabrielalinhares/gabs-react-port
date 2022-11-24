import React from "react";
import ResumeImg from "../../assets/cover/resume.jpg";

function Resume() {
  return (
    <div className="sections resume">
      <div>
        <h1 id="Resume">Resume</h1>
        <h3>Proficiencies List</h3>
        <ul className="section-content">
          <li> - HTML</li>
          <li> - CSS</li>
          <li> - Javascript</li>
          <li> - Node.js</li>
          <li> - MySQL</li>
          <li> - React</li>
        </ul>
      </div>

      <div>
        <p>
          {
            " Do you think I would be a good fit to your team? Download my resume!"
          }
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1c219FsxCSxnB-YKMjwgk_Wl0TOZlf06M/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ResumeImg}
              alt={"printscreen of my resume page"}
              width="300px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
