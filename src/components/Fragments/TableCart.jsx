import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";


function TableCart (props) {
    const {products} = props;
    const cart = useSelector((state) => state.cart.data);
    const [ totalShooping, setTotalShooping ] = useState(0);


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

    return (
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
                  {totalShooping.toLocaleString("en-US", {
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
