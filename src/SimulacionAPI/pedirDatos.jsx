import data from "../data/products.json";

const pedirDatos = () => {
  return new Promise((resolve,reject) => {
    setTimeout( () => {
        resolve(data);
    }, 500)
  })
};

export default pedirDatos;
