import ShopItem from "./ShopItem"

function ListView({items}) {

    return (
      <div>
        {items.map((item, i) => <ShopItem item={item} key={i} />)}
      </div>
    )
  }
  
  export default ListView