import SendCode from "@/Components/Templates/Auth/SendCode";
import VerifyCode from "@/Components/Templates/Auth/VerifyCode";
import { useState } from "react";
const AuthPage = () => {
    const [phoneNumber,setPhoneNumber]=useState('')
    const [status, setstatus] = useState({ ispending: false, OTPform: false });
    return (
        <div className="w-dvw h-dvh flex-center">
            <div className="container">
                {status.OTPform?<VerifyCode ispending={status.ispending} phoneNumber={phoneNumber} setstatus={setstatus}/>:<SendCode setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} ispending={status.ispending} setstatus={setstatus}/>}
            </div>
        </div>
    );
};
export default AuthPage;
