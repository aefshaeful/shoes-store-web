import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.services";

const FormLogin = () => {
    const [loginMessage, setLoginMessage] = useState("");
    const handleSubmit  = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
          if (status) {
            localStorage.setItem("token", res);
            //localStorage.setItem("username", event.target.username.value);
            window.location.href = "/products";
          }else{
            setLoginMessage(res.response.data);
          }
        });
        // localStorage.setItem("email",event.target.email.value);
        // localStorage.setItem("password",event.target.password.value);
        // window.location.href = "/products";
        // console.log(event.target.email.value); // email diambil dari name pada input form email.
        // console.log("Click Me!");
    };

    const usernameRef = useRef(null);
    
    useEffect(() => {
      usernameRef.current.focus();
    }, []);

    return(
        <form onSubmit={handleSubmit}>
          <InputForm 
            name="username" 
            placeholder="username" 
            type="text" 
            label="Username"
            ref={usernameRef}
          />
          <InputForm 
            name="password" 
            placeholder="*******" 
            type="password" 
            label="Password" 
          />
          <Button classname=" bg-blue-500 w-full mt-6" type="submit" >Login</Button>
          {loginMessage && (
            <p className="text-red-500 text-xs mt-3 text-center">{loginMessage}</p>
          )}
        </form>
    )
}

export default FormLogin;