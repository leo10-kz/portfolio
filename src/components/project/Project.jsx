import "./project.scss"
import spa from "../../assets/sap.png";
import rick from "../../assets/rick.png"
import canchera from "../../assets/canchera.png"
import { useState } from "react";

export default function Project() {

  const [currentSlider, setCurrentSlider] = useState(0)

const data = [
  {
    id:1,
    title: "Pokemon App",
    desc: "SPA, utilizando React, Redux, Nodejs, Sequelize and PostgresSQL",
    img:spa
  },
  {
    id:2,
    title: "Rick and Morty",
    desc: "Una aplicación de reacción creada con React y consumiendo la API de Rick&Morty",
    img:rick
  },
  {
    id:3,
    title: "Canchera App",
    desc: "SPA, usando metodologias agiles - ReactJS, Google Auth, Google Maps API, Mercadopago Checkout Pro, NodeJs, Express, PostgreSQL, Sequelize, Nodemailer, JWT ",
    img:canchera
  }
];

const handleClick = (way) => {
  way === "left"
    ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
    : setCurrentSlider(
        currentSlider < data.length - 1 ? currentSlider + 1 : 0
      );
};

  return (
    <div className='project' id="project">
      <div className="slaider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
       {data.map(d => (
       <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="./assets/globe.png" alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span><a href="#portfolio">Projects</a></span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
       <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
       <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  )
}
