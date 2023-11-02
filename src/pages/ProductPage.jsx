import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState, useRef } from "react";
import { getProducts } from "../services/product.service";
import useLogin from "../hooks/useLogin";


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
  const [cart, setCart] = useState([])
  const [totalShooping, setTotalShooping] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    })
  }, []);


  // Component DidMount, Component Constructor yang menampung state ke dalam localStorage
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, []);


  // Component DidUpdate
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, cartItem) => {
        const product = products.find(product => product.id === cartItem.id)
        return acc + (product.price * cartItem.qty)
      }, 0)
      setTotalShooping(total)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, products]);


  // useRef
  const totalShoopingRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalShoopingRef.current.style.display = "table-row";
    } else {
      totalShoopingRef.current.style.display = "none";
    }
  }, [cart]);


  const handleAddToCart = (id) => {
    if(cart.find(item => item.id === id)) {
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
    }else{
      setCart([...cart, {id: id, qty: 1}])
    }
  };

  
  const handleLogout = () => {
    localStorage.removeItem("token");
    //localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end items-center px-10 text-white text-sm bg-blue-500 h-20">
        <p className="mr-5">Hi, {username}</p>
        <button
          className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-3/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Image image={product.image} />
                <CardProduct.Name name={product.title}>
                  {product.description}
                </CardProduct.Name>
                <CardProduct.Price 
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart} 
                />
              </CardProduct>
          ))}
        </div>
        <div className="w-1/2">
          <div className="text-3xl font-bold ml-5 mb-2">Shopping Cart</div>
          <table className="min-w-full text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {products.length > 0 && 
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 20)}...</td>
                    <td>{item.qty}</td>
                    <td> 
                      ${" "} 
                      {product.price.toLocaleString("en-US", { styles: "currency", currency: "USD"})}
                    </td>
                    <td> 
                      ${" "} 
                      {(item.qty * product.price).toLocaleString("en-US", { styles: "currency", currency: "USD"})}
                    </td>
                  </tr>
                )}
              )}
              <tr ref={totalShoopingRef}>
                <td colSpan={3}><b>Total Shooping</b></td>
                <td>
                  <b>
                  ${" "} 
                  {(totalShooping).toLocaleString("en-US", { styles: "currency", currency: "USD"})}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
