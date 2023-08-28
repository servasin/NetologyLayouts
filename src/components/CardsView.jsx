import ShopCard from "./ShopCard"

function CardsView({cards}) {

    return (
      <div className="cards-view">
        {cards.map((card, i) => <ShopCard card={card} key={i} />)}
      </div>
    )
  }
  
  export default CardsView