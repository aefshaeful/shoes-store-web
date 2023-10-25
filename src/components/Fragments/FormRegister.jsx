import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return(
        <form action="">
          <InputForm 
            nama="fullname" 
            placeholder="full name" 
            type="text" 
            label="Full Name"
          />
           <InputForm 
            nama="email" 
            placeholder="example@gmail.com" 
            type="email" 
            label="Email"
          />
          <InputForm 
            nama="password" 
            placeholder="*******" 
            type="password" 
            label="Password" 
          />
          <InputForm 
            nama="confirmPassword" 
            placeholder="*******" 
            type="password" 
            label="Confirm Password"
          />
          <Button classname=" bg-blue-500 w-full mt-6">
            <Link to="/login"> Register</Link>
          </Button>
        </form>
    )
}

export default FormRegister;