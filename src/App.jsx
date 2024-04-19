import './App.css'
import './components/navbar.css'
import './components/body.css'
import Navbar from './components/navbar'
import Card from './components/card'
const cardData = [
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_buy.webp',
    description: 'Buying a home',
  },
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_rent.webp',
    description: 'Renting a home',
  },
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_ppf.webp',
    description: 'Sell/Rent your property',
  },
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_pg.webp',
    description: 'PG and co-living',
  },
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_com_buy.webp',
    description: 'Buying commercial spaces',
  },
  {
    imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_com_lease.webp',
    description: 'Lease commercial spaces',
  }
];
function App(){
  return(
    <>
      <Navbar/>
      <main>
      <div className="box1">
           <div className="inner">
            {cardData.map((card,index)=>(
              <Card key = {index} imageUrl={card.imgSrc} description={card.description}/>
            ))}
           </div>
      </div>
      </main>
    </>
  )
}
export default App