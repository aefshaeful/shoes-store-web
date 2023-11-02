import axios from "axios";

export const getProducts = async (result) => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
        result(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}


