/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, classname = "bg-blue-500"} = props;
    return (
        <button 
            className={`${classname} hover:bg-blue-600 text-white font-semibold h-10 px-6 rounded-md`} 
            type="submit"
        >
            {children}
        </button>
    );
};

export default Button;