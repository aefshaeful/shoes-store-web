import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "$129.99",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: "$129.99",
    image: "/images/shoes-2.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eligendi qui rerum molestiae mollitia tenetur! Dolorum sapiente, quaerat reiciendis consequatur aut voluptate minus natus perspiciatis iste recusandae deleniti enim soluta.",
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    price: "$129.99",
    image: "/images/shoes-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
];

const user = window.localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
}

const ProductPage = () => {
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
        {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Image image={product.image} />
          <CardProduct.Name name={product.name}>
            {product.description}
          </CardProduct.Name>
          <CardProduct.Price price={product.price} />
        </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
