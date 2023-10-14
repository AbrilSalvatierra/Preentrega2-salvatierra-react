import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pedirItemPorId from "../../SimulacionAPI/pedirItemPorId";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [item,setItem] = useState(null); 
    const id = useParams().id;


    useEffect(() => {
      pedirItemPorId(Number(id))
        .then((res)=>{
          setItem(res);
        })
    },[id])

  return (
    <main className="item-container">
      {item &&<ItemDetail item={item}/>}
    </main>
  )
}

export default ItemDetailContainer;