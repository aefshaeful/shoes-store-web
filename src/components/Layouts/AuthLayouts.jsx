/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, desc, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          onClick={handleDarkMode}
          className="absolute right-5 top-5 px-4 py-1 rounded-full bg-gray-300 text-gray-800"
        >
          {isDarkMode ? "☀" : "🌙"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
        <p
          className={`font-semibold text-sm text-slate-500 w-full ${
            isDarkMode && "text-white"
          }`}
        >
          {desc}
        </p>
        {children}
        <Account name={type} />
        {/* <p className="flex justify-center text-sm mt-5">
                    {type === "login" 
                        ? "Don't have an account?" 
                        : "Already have an account?"
                    }
                    {type === "login" &&
                        <Link to="/register" className="text-blue-600 hover:underline ml-2 font-bold"> Sign up</Link>
                    } 
                    {type === "register" &&
                        <Link to="/login" className="text-blue-600 hover:underline ml-2 font-bold"> Sign in</Link>
                    }
                </p> */}
      </div>
    </div>
  );
};

const Account = ({ name }) => {
  const { isDarkMode } = useContext(DarkMode);
  if (name === "login") {
    return (
      <p className={`flex justify-center text-sm mt-5 ${isDarkMode && "text-white"}`}>
        Don&apos;t have an account?
        <Link
          to="/register"
          className="text-blue-600 hover:underline ml-2 font-bold"
        >
          {" "}
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className={`flex justify-center text-sm mt-5 ${isDarkMode && "text-white"}`}>
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 hover:underline ml-2 font-bold"
        >
          {" "}
          Sign in
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
