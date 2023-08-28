function ShopCard({card}) {

  return (
    <div className="shop-card">
      <img src={card.img} className="shop-card-img"/>
      <div>
        <div className="shop-card-name">{card.name}</div>
        <div className="shop-card-color">{card.color}</div>
      </div>
      <div>
        <div className="shop-card-price">${card.price}</div>
        <button className="shop-card-btn">Add to card</button>
      </div>
    </div>
  )
}
  
  export default ShopCard