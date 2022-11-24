import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portifolio from "./components/Portifolio";
import Resume from "./components/Resume";
import Foot from "./components/Foot";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portifolio></Portifolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <footer align="center">
        <Foot></Foot>
         </footer>
    </div>
  );
}

export default App;
