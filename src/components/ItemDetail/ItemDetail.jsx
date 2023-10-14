import { Card, CardContent, CardMedia, Typography, CardActionArea, Container } from '@mui/material';

const ItemDetail = ({item}) => {
  return (
    <div className="product-card">
    <img src={item.imagen} alt="{producto.titulo}"/>
    <div>
        <div>
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          <p className='price'>$ {item.precio}</p>
          </div>
    </div>
  </div>
  )
}

export default ItemDetail