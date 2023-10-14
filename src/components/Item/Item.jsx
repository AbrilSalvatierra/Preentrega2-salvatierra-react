import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt="{producto.titulo}"/>
      <div>
          <div>
            <h3>{producto.titulo}</h3>
            <p>{producto.categoria}</p>
            <p className='price'>$ {producto.precio}</p>
            <Link className="button-ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
      </div>
    </div>
  );
};


export default Item;