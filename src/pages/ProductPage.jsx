import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Image image="/images/shoes-1.jpg" />
        <CardProduct.Name name="Nike Air Max 270">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </CardProduct.Name> 
        <CardProduct.Price price="$129.99" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Image image="/images/shoes-1.jpg" />
        <CardProduct.Name name="Nike Air Max 270">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptate.
        </CardProduct.Name> 
        <CardProduct.Price price="$129.99" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
