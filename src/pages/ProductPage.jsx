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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
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
  );
};

export default ProductPage;
