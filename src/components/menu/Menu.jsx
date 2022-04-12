import "./menu.scss"

export default function Menu({ menuOpen, setMenuOopen }) {
  return (
    <div className={"menu " + ( menuOpen && "active" )}>
       <ul>
           <li onClick={() => setMenuOopen(false)}>
               <a href="#intro">Home</a>
           </li>
           <li onClick={() => setMenuOopen(false)}>
               <a href="#about">About</a>
           </li>
           <li onClick={() => setMenuOopen(false)}>
               <a href="#portfolio">Portfolio</a>
           </li>
           <li onClick={() => setMenuOopen(false)}>
               <a href="#project">Projects</a>
           </li>
           <li onClick={() => setMenuOopen(false)}>
               <a href="#contact">Contact</a>
           </li>
       </ul>
    </div>
  )
}
