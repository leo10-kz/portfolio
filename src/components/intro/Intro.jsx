import "./intro.scss"
import { init } from "ityped"
import { useRef } from "react"
import { useEffect } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() =>{
    init(textRef.current,{
      showCursor: true,
      backDelay: 1200,
      backSpeed: 60,
      strings: [
        "Tabajo en Equipo",
        "Paciencia",
        "Resolucion de problemas ",
        "Auto Aprendisaje",
        "Comunicacion",
      ],
    })
  },[])

  return (
    <div className='intro' id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/cv_loe-removebg-preview.png" alt="not Found" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
             <h2>Hola Soy</h2>
             <h1>Leonel Quiroga</h1> 
             <h3>Full-Stack Developer <span ref={textRef}></span></h3>
          </div>
          <a href="#about">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
