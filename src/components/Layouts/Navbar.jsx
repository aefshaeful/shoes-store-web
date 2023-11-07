import { useContext, useEffect, useState } from "react";
import useLogin from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";


export default function Navbar() {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    
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

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex justify-end items-center px-10 text-sm bg-blue-500 h-20">
            <p className="mr-5 font-bold">Hi, {username}</p>
            <button
                className="px-3 py-2 bg-gray-300 text-gray-800 text-xs font-bold uppercase rounded-full"
                onClick={handleLogout}
            >
            Logout
            </button>
            <div className="flex justify-item bg-gray-300 text-gray-800 px-3 py-2 text-xs font-bold ml-3 rounded-full">
                {totalCart}
            </div>
            <button onClick={handleDarkMode} className="flex justify-item ml-3 px-4 py-1 rounded-full bg-gray-300 text-gray-800">
                {isDarkMode ? "☀" : "🌙"}
            </button>
        </div>
    )
}
