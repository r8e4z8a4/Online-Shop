import Button_4 from "@/Components/Common/Buttons/Button_4";
import React from "react";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router";
const ErrorBox = ({handler}) => {
    const navigate=useNavigate()
    return (
        <div className="text-center p-3 space-y-10">
            <TiDelete className="text-center size-20 text-red-700 mx-auto" />
            <p className="text-2xl">خطا در ارتباط با سرور</p>
            <div className="">
                <Button_4 handler={()=>navigate(-1)} className={"border-2 border-amber-300"}>بازگشت به صفحه قبل</Button_4>
            </div>
        </div>
    );
};
export default ErrorBox;