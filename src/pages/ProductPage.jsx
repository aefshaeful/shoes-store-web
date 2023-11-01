import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 129.99,
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 115.44,
    image: "/images/shoes-2.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi qui rerum molestiae mollitia tenetur! Dolorum sapiente, quaerat reiciendis consequatur aut voluptate minus natus perspiciatis iste recusandae deleniti enim soluta.",
  },
  {
    id: 3,
    name: "Adidas Superstar",
    price: 159.29,
    image: "/images/shoes-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
];

const user = window.localStorage.getItem("email");


const ProductPage = () => {
  const [cart, setCart] = useState([])
  const [totalShooping, setTotalShooping] = useState(0)

  // Component DidMount, Component Constructor yang menampung state ke dalam localStorage
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, []);


  // Component DidUpdate
  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((total, item) => {
        const product = products.find(product => product.id === item.id)
        return total + (product.price * item.qty)
      }, 0)
      setTotalShooping(total)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

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
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end items-center px-10 text-white text-sm bg-blue-500 h-20">
        <p className="mr-5">Hi, {user}</p>
        <button
          className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-4/6 flex flex-wrap">
        {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Image image={product.image} />
          <CardProduct.Name name={product.name}>
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
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
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
                )
              })}
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
