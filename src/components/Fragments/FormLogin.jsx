import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
    const handleSubmit  = (event) => {
        event.preventDefault();
        localStorage.setItem("email",event.target.email.value);
        localStorage.setItem("password",event.target.password.value);
        window.location.href = "/products";
        console.log(event.target.email.value); // email diambil dari name pada input form email.
        console.log("Click Me!");
    };

    const emailRef = useRef(null);
    
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return(
        <form onSubmit={handleSubmit}>
          <InputForm 
            name="email" 
            placeholder="example@gmail.com" 
            type="email" 
            label="Email"
            ref={emailRef}
          />
          <InputForm 
            name="password" 
            placeholder="*******" 
            type="password" 
            label="Password" 
          />
          <Button classname=" bg-blue-500 w-full mt-6" type="submit" >Login</Button>
        </form>
    )
}

export default FormLogin;