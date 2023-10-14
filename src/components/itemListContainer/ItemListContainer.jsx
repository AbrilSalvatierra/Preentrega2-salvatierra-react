import { useState, useEffect } from "react";
import pedirDatos from "../../SimulacionAPI/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoryId = useParams ().categoryId;

  useEffect(() => {
    pedirDatos()
      .then((res)=>{
        if (categoryId){
        setProductos(res.filter((product)=> product.categoria === categoryId));
      } else {
        setProductos(res);
      }
      });
  }, [categoryId])
  

  return (
    <main>
      <ItemList productos={productos}/>
    </main>
  );
};

export default ItemListContainer;