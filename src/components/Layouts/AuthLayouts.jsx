/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, title, desc, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs" >
                <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
                <p className="font-semibold text-sm text-slate-500 w-full">
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

const Account = ({name}) => {
    if (name === "login") {
        return (
            <p className="flex justify-center text-sm mt-5">
                Don&apos;t have an account?
                <Link to="/register" className="text-blue-600 hover:underline ml-2 font-bold"> Sign up</Link>
            </p> 
        )
    } else {
        return (
            <p className="flex justify-center text-sm mt-5">
                Already have an account?
                <Link to="/login" className="text-blue-600 hover:underline ml-2 font-bold"> Sign in</Link>
            </p>
        )
    }
}

export default AuthLayout;


