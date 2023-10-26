/* eslint-disable react/prop-types */
const Button = (props) => {
    const {
        children, 
        classname = "bg-blue-500", 
        type = "button", 
        onClick= () => {}, 
    } = props;
    return (
        <button 
            className={`${classname} hover:bg-blue-600 text-white font-semibold h-10 px-6 rounded-md`} 
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

// onClick= () => {} : fungsinya untuk memberikan default value dengan menggunakan function kosong. 
// Jika di click maka buttonnya tidak melakukan apapun.