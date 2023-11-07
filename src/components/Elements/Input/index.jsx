/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;
   
    return(
        <div className="mt-4">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
});

export default InputForm;