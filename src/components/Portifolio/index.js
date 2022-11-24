import React, { useState } from "react";
import JSQuiz from "../../assets/cover/Proj-js.jpg";
import LifeTracker from "../../assets/cover/Proj-lt.jpg";
import BarkWoof from "../../assets/cover/Proj-bw.jpg";
import WorkDayScheduler from "../../assets/cover/Proj-wds.jpg";
import NoteTaker from "../../assets/cover/Proj-nt.jpg";
import PasswordGen from "../../assets/cover/Proj-bw.jpg";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Java Scritp QUIZ ",
      imgAsset: JSQuiz,
      repoUrl: "https://github.com/gabrielalinhares/superquizjs",
      appUrl: "https://gabrielalinhares.github.io/superquizjs/",
    },
    {
      name: "Life Tracker",
      imgAsset: LifeTracker,
      repoUrl: "https://github.com/gabrielalinhares/habitual-habits",
      appUrl: "https://vast-beach-17756.herokuapp.com/",
    },

    {
      name: "Work Day Scheduler ",
      imgAsset: WorkDayScheduler,
      repoUrl: "https://github.com/gabrielalinhares/WorkScheduleDay12345",
      appUrl: "https://gabrielalinhares.github.io/WorkScheduleDay12345/",
    },
    {
      name: "Bark Woof ",
      imgAsset: BarkWoof,
      repoUrl: "https://github.com/cvanbreda91/bark-woof",
      appUrl: "https://cvanbreda91.github.io/bark-woof/",
    },
    {
      name: "Note Taker",
      imgAsset: NoteTaker,
      repoUrl: "https://github.com/gabrielalinhares/glinhares-onelist",
      appUrl: "https://glinhares-note-taker.herokuapp.com/",
    },
    {
      name: "Password Generator",
      imgAsset: PasswordGen,
      repoUrl: "https://gabrielalinhares.github.io/ChallengePasswordGenerator/",
      appUrl: "https://github.com/gabrielalinhares/ChallengePasswordGenerator",
    },
  ]);

  return (
    <section>
      <h1 id="Portifolio">Portifolio</h1>
      <div className="section-content">
        {projects.map((project, i) => (
          <div className="wrapper">
            <div className="container" key={i}>
              <a href={project.appUrl}>
                <img src={project.imgAsset} alt={project.name} />
              </a>
              <div className="text-block">
                {project.name}
                <br />
                <a href={project.repoUrl}>GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
