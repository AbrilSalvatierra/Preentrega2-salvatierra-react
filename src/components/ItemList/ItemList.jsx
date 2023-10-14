import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div>
        <div className="container">
            {productos.map((product) => <Item producto={product} key={product.id} />)}
        </div>
    </div>
  )
}

export default ItemList