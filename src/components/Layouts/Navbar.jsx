import { useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { useSelector } from "react-redux";


export default function Navbar() {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => { 
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token"); // token ada di auth.services.js
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-end items-center px-10 text-white text-sm bg-blue-500 h-20">
            <p className="mr-5">Hi, {username}</p>
            <button
                className="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded-lg"
                onClick={handleLogout}
            >
            Logout
            </button>
            <div className="flex justify-item bg-red-500 px-3 py-2 text-xs text-white ml-3 rounded-lg">
                {totalCart}
            </div>
        </div>
    )
}
