import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

/* eslint-disable react/prop-types */
const Label = (props) => {
    const { htmlFor, children } = props;
    const { isDarkMode } = useContext(DarkMode);

    return(
        <label htmlFor={htmlFor} className={`block text-slate-700 text-sm font-bold mb-2 ${ isDarkMode && "text-white"}`}>
            {children}
        </label>
    )
}

export default Label;