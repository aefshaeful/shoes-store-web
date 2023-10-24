import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";


const RegisterPage = () => {
    return(
        <AuthLayout title="Register" desc="Create an my account">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;