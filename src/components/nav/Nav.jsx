import "./nav.scss"
import { FaUserAlt, FaEnvelope,FaGithub, FaLinkedin } from "react-icons/fa";



export default function Nav({ menuOpen, setMenuOopen }) {
 

  return (
    <div className={"nav "  + (menuOpen && "active")} >
        <div className="wrapper">
           <div className="left">
             <a href="#intro" className="logo">LeoQI.</a>
             <div className="itemContainer">
                <FaUserAlt className="icon"/>
                <span>+34 615711608</span>
             </div>
             <div className="itemContainer">
                <FaEnvelope className="icon"/>
                <span>leitochaso10@gmail.com</span>
             </div>
             <div className="itemContainer">
                <FaGithub className="icon"/>
                <a href="https://github.com/leo10-kz" target="_blank" rel="noopener noreferrer">leo10-kz</a>
             </div>
             <div className="itemContainer">
                <FaLinkedin className="icon"/>
                <a href="https://www.linkedin.com/in/leonel-maximiliano-quiroga/" target="_blank" rel="noopener noreferrer">leo10-kz</a>
             </div>
           </div>
           <div className="right">
               <div className="hamburguer"  onClick={()=> setMenuOopen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
           </div>
        </div>
    </div>
  )
}
