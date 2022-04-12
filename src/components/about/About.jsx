import './about.scss';
import pdf from '../../assets/Leonel Quiroga.pdf';
import cv from '../../assets/cv-img.png'

export default function About() {
  return (
    <div className='about' id='about'>
       <div className="left">
           <div className="container">
               <h2>Hola mi nombre es Leonel 👋</h2>
               <p>Soy un desarrollador al que le encanta aprender cosas nuevas. Soy Argentino y actualmente vivo en España, descubrí este fascinante mundo a finales del año 2020, siempre quise cambiar y trabajar en el mundo de las TI.
               Algunas de mis habilidades incluyen HTML, CSS, JavaScript, React, Redux, NodeJS, Express, PostgreSQL y Sequelize.   
               </p>
               <h3>Habilidades</h3>
           <div className="imgContainer">
               <img src="./assets/html.png" alt="" />
               <img src="./assets/css.png" alt="" />
               <img src="./assets/js.png" alt="" />
               <img src="./assets/node-js.png" alt="" />
               <img src="./assets/postgres.png" alt="" />
               <img src="./assets/react.png" alt="" />
               <img src="./assets/redux.png" alt="" />
               <img src="./assets/sequelize-logo.png" alt="" />
           </div>
           </div>
       </div>
       <div className="right">
           <div className='item'>
           <a href={pdf} download={pdf} target="_blank" rel="noopener noreferrer"><img src={cv} alt="" /></a>
           <h3>Descargar cv</h3>
           </div>
       </div>
    </div>
  )
}
