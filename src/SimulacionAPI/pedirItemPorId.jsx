import data from "../data/products.json";

const pedirItemPorId = (id) => {
    return new Promise((resolve,reject) => {
       const item= data.find((el) => el.id === id);
  
       if(item) {
        resolve(item)
       } else {
          reject({
            error: "Product Not Found"
          })
       }
    })
  };
  
  export default pedirItemPorId;