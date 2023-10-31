/* eslint-disable react/prop-types */
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-white border border-gray-800 w-60 h-41 rounded-lg shadow mx-4 my-2 flex flex-col justify-between">
            {children}
        </div>
    );
};


const ImageProduct = (props) => {
    const { image } = props;
    return (
        <a href="#">
        <img
          className="w-full rounded-t-lg object-cover pb-2 object-center max-w-xs h-40"
          src={image}
          alt="shoes images"
        />
      </a>
    )
}

const NameProduct = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-blue-600">
            {name}
          </h5>
          <p className="text-sm text-black">
            {children}
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
