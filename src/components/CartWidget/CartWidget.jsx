import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const cantidadEnCarrito = 3;
  return (
    <div>
      <ShoppingCartIcon/>
      <span>{cantidadEnCarrito}</span>
    </div>
  )
}

export default CartWidget