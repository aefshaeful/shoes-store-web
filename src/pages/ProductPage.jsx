import CardProduct from "../components/Fragments/CardProduct";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";


// const products = [
//   {
//     id: 1,
//     name: "Nike Air Max 270",
//     price: 129.99,
//     image: "/images/shoes-1.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
//   },
//   {
//     id: 2,
//     name: "Nike Air Max",
//     price: 115.44,
//     image: "/images/shoes-2.jpg",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi qui rerum molestiae mollitia tenetur! Dolorum sapiente, quaerat reiciendis consequatur aut voluptate minus natus perspiciatis iste recusandae deleniti enim soluta.",
//   },
//   {
//     id: 3,
//     name: "Adidas Superstar",
//     price: 159.29,
//     image: "/images/shoes-3.jpg",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
//   },
// ];

//const user = window.localStorage.getItem("username");


const ProductPage = () => {
  const [products, setProducts] = useState([])
  const { isDarkMode } = useContext(DarkMode);
 
  useEffect(() => {
    getProducts((result) => {
      setProducts(result);
    })
  }, []);

  // const handleAddToCart = (id) => {
  //   if(cart.find(item => item.id === id)) {
  //     setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
  //   }else{
  //     setCart([...cart, {id: id, qty: 1}])
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className={`flex justify-center py-10 ${isDarkMode && "bg-slate-800"}`}>
        <div className="w-3/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Image image={product.image} id={product.id} />
                <CardProduct.Name name={product.title}>
                  {product.description}
                </CardProduct.Name>
                <CardProduct.Price 
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart} 
                />
              </CardProduct>
          ))}
        </div>
        <div className="w-1/2">
          <div className={`text-3xl font-bold ml-5 mb-2 ${isDarkMode && "text-white"}`}>Shopping Cart</div>
          <TableCart products={products}/>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
