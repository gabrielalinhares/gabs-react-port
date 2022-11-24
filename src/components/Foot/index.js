import React from "react";

function Nav() {
  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <footer data-testid="footer" className="flex-row px-1">
      <h2>
        <a href="https://gabrielalinhares.github.io/gabs-react-port/>
          <span role="img" aria-label="camera">
            {" "}
            ☝
          </span>{" "}
          Back to the top
        </a>
      </h2>
      <section>
        <ul className="flex-row">
          <li className="mx-2">
            <p>{" Check my social medias! >>> "}</p>
          </li>
          <li className="mx-2">
            <a
              href="http://www.linkedin.com/in/gabrielacla"
              onClick={() => handleClick()}
            >
              Linkedin
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://github.com/gabrielalinhares"
              onClick={() => handleClick()}
            >
              GitHub
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#https://twitter.com/gabrielaalb"
              onClick={() => handleClick()}
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Nav;
