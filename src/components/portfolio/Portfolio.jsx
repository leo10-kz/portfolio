import { useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio } from "../../data"
import { useEffect } from "react"

export default function Portfolio() {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id:'featured',
      title:"Featured"
    },
    {
      id:'web',
      title:'Web App'
    }
  ];

  useEffect(() =>{
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])

  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
         {list.map(l => (
           <PortfolioList key={l.id} item={l.title} active={selected === l.id} setSelected={setSelected} id={l.id}/>
         ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
            <a href={d.link} target="_blank" rel="noopener noreferrer">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            </a>
            </div>
          ))}
        </div>
    </div>
  )
}
