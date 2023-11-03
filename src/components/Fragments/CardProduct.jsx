/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-white border border-gray-800 w-45 h-41 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    );
};


const ImageProduct = (props) => {
    const { image, id } = props;
    return (
        <Link to={`/product/${id}`}>
        <img
          className="rounded-t-lg object-cover pb-2 object-center max-w-xs h-60 px-6 py-6 mx-auto block"
          src={image}
          alt="shoes images"
        />
      </Link>
    )
}

const NameProduct = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-blue-600">
            {name.substring(0, 20)}...
          </h5>
          <p className="text-sm text-black">
            {children.substring(0, 100)}...
          </p>
        </a>
      </div>
    )
}

const PriceProduct = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <h3 className="text-xl font-bold text-gray-800">
              ${" "} 
              {price.toLocaleString("en-US", { styles: "currency", currency: "USD"})}
            </h3>
            <button 
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              onClick={() => handleAddToCart(id)} 
            >
                Add to Cart
            </button>
        </div>
    )
}

CardProduct.Image = ImageProduct;
CardProduct.Name = NameProduct;
CardProduct.Price = PriceProduct;

export default CardProduct;
