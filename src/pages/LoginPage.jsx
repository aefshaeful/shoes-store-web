import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";


const LoginPage = () => {
    return(
        <AuthLayout title="Login" desc="Welcome back, please login to your account">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;