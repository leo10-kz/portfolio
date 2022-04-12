import Nav from "./components/nav/Nav.jsx"
import Intro from "./components/intro/Intro.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx"
import Project from "./components/project/Project.jsx"
import Contact from "./components/contact/Contact.jsx" 
import Menu from "./components/menu/Menu.jsx"
import "./app.scss"
import { useState } from "react"
import About from "./components/about/About.jsx"


function App() {
  const [ menuOpen, setMenuOopen ] = useState(false)

  return (
    <div className="app">
      <Nav menuOpen={menuOpen} setMenuOopen={setMenuOopen}/>
      <Menu menuOpen={menuOpen} setMenuOopen={setMenuOopen}/>
      <div className="sections">
      <Intro/>
      <About/>
      <Portfolio/>
      <Project/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
