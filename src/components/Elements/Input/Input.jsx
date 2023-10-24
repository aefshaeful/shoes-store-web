/* eslint-disable react/prop-types */
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
              type={type}
              className="text-sm w-full rounded 2-full py-2 px-3 border text-slate-700 placeholder: opacity-50"
              placeholder={placeholder}
              name={name}
        />
    );
};

export default Input;