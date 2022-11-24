import React from "react";


function Nav() {
 

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            👩‍💻
          </span>{" "}
          Gabriela Albuquerque
        </a>
      </h2>
      <nav position-align = "center">
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#Portifolio" onClick={() => handleClick()}>
              Portifolio
            </a>
          </li>
          <li className="mx-2">
            <a href="#Contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a href="#Resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
