/* eslint-disable react/prop-types */

const AuthLayout = (props) => {
    const { children, title, desc } = props;
    return (
        <div className="w-full max-w-xs" >
            <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
            <p className="font-semibold text-sm text-slate-500 w-full">
                {desc}
            </p>
            {children}
        </div>
    );
};

export default AuthLayout;
