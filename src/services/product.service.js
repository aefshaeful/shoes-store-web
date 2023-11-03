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

export const getDetailProduct = async (id, result) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        result(response.data);
    })
    .catch(error => {
        console.log(error);
    })
}


