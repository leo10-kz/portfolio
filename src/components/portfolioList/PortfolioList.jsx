import "./portfolioList.scss"

export default function PortfolioList({item, active, setSelected, id}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
       {item}
    </li>
  )
}
