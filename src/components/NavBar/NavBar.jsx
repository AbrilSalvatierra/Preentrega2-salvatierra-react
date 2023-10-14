import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
 return (
  <nav>
    <Link to="/" className="logo">
       Ebisu
    </Link>
    <ul>  
      <Link className="menu-page" to="/">Home</Link>
      <Link className="menu-page" to="/category/Peluches">Peluches</Link>
      <Link className="menu-page" to="/category/Juguetes">Juguetes</Link>
      <Link className="menu-page" to="/category/Otros">Otros</Link>
      <Link className="menu-page" to="/contact">Contact</Link>
      <li className="menu-page"><CartWidget/></li>
    </ul>
  </nav>
  );
}

export default NavBar;