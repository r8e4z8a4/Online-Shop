import { useId } from "react";
import Input_1 from "@/Components/Common/Inputs/Input_1";
const ProductDrawerInput = ({  label,...property }) => {
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Input_1 id={id} {...property}/>
        </div>
    );
};
export default ProductDrawerInput;