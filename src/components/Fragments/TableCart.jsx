import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPriceDispatch } from "../../hooks/useTotalPriceDispatch";
import { useTotalPrice } from "../../hooks/useTotalPrice";



function TableCart (props) {
    const {products} = props;
    const cart = useSelector((state) => state.cart.data);
    // const [ totalShooping, setTotalShooping ] = useState(0);
    const { isDarkMode } = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();


    // Component DidUpdate
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, cartItem) => {
                const product = products.find(product => product.id === cartItem.id);
                return acc + product.price * cartItem.qty;
            }, 0)
            // setTotalShooping(total)
            dispatch({
              type: "UPDATE_TOTAL_PRICE", 
              payload: {
                total: sum,
              }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, products, dispatch]);


    // useRef
    const totalShoopingRef = useRef(null)
    
    useEffect(() => {
        if (cart.length > 0) {
            totalShoopingRef.current.style.display = "table-row";
        } else {
            totalShoopingRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table className={`min-w-full text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
                      {product.price.toLocaleString("en-US", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>
                      ${" "}
                      {(item.qty * product.price).toLocaleString("en-US", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
            <tr ref={totalShoopingRef}>
              <td colSpan={3}>
                <b>Total Shooping</b>
              </td>
              <td>
                <b>
                  ${" "}
                  {total.toLocaleString("en-US", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </b>
              </td>
            </tr>
          </tbody>
        </table>
    );
}

TableCart.propTypes = {
    products: PropTypes.array.isRequired,
};

export default TableCart;
