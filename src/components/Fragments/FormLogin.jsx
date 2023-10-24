import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";

const FormLogin = () => {
    return(
        <form action="">
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
          <Button classname=" bg-blue-500 w-full mt-6">Login</Button>
        </form>
    )
}

export default FormLogin;