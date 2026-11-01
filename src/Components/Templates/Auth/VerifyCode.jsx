import POSThandler from "@/API/POSThandler";
import Timer from "@/Components/Templates/Auth/Timer";
import Button_3 from "@/Components/Common/Buttons/Button_3";
import { AuthContext } from "@/Context/AuthContext";
import useCountDown from "@/Hooks/useCountDown";
import { useContext, useEffect, useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ManageRequest from "@/API/ManageRequest";
const OTP_LENGTH = 4;
const VerifyCode = ({ phoneNumber, setstatus, ispending }) => {
    const [code, setCode] = useState("");
    const { hour, minute, second, reset } = useCountDown(60);
    const inputRefs = useRef([]);
    const {initAuth}=useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);
    const isTimerFinished = hour === "00" && minute === "00" && second === "00";
    const focusInput = (index) => {
        if (index < 0 || index >= OTP_LENGTH) return;
        inputRefs.current[index]?.focus();
        inputRefs.current[index]?.select();
    };
    const handleChange = (e, index) => {
        const value = e.target.value;
        const digit = value.replace(/\D/g, "").slice(-1);
        if (!digit) return;
        const newCode = code.slice(0, index) + digit + code.slice(index + 1);
        setCode(newCode.slice(0, OTP_LENGTH));
        if (index < OTP_LENGTH - 1) {
            focusInput(index + 1);
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key !== "Backspace") return;
        if (code[index]) {
            e.preventDefault();
            const newCode = code.slice(0, index) + code.slice(index + 1);
            setCode(newCode);
            return;
        }
        if (index > 0) {
            e.preventDefault();
            const newCode = code.slice(0, index - 1) + code.slice(index);
            setCode(newCode);
            focusInput(index - 1);
        }
    };
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");
        const digits = pastedText.replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!digits) return;
        setCode(digits);
        const nextIndex = Math.min(digits.length, OTP_LENGTH - 1);
        focusInput(nextIndex);
    };
    const getDigit = (index) => {
        return code[index] ?? "";
    };
    const isButtonDisabled = ispending || (!isTimerFinished && code.length !== OTP_LENGTH);
    const successHandlerForVerifyCod=()=>{
        navigate(-1);
        setstatus({ ispending: false, OTPform: false,});
        initAuth()
    }
    const successHandlerForSendCod=()=>{
        setstatus({ispending: false,OTPform: true,});
         setCode("");
        reset();
        focusInput(0);
    }
    const errorHandlerForSendCode=()=>{
        setstatus({ispending: false,OTPform: true,});
    }
    const errorHandlerForVerifyCode=()=>{
        setstatus({ ispending: false, OTPform: true,});
    }
    const handler = async (e) => {
        e.preventDefault();
        if (isTimerFinished) {
            setstatus({ispending: true,OTPform: true,});
            const promise = POSThandler("auth/send", {phone: phoneNumber,});
            ManageRequest({promise,TextLoader:"در حال ارسال کد",successHandler:successHandlerForSendCod,TextSuccess:"کد با موفقیت ارسال شد",errorHandler:errorHandlerForSendCode,TextError:"ارسال مجدد کد ناموفق بود، لطفاً دوباره تلاش کنید"})
            return;
        }
        setstatus({ ispending: true, OTPform: true,});
        const promise = POSThandler("auth/verify", { phone: phoneNumber, otp: code, isSeller: false,},{withCredentials:true});
        ManageRequest({promise,TextLoader:"در حال اعتبارسنجی",successHandler:successHandlerForVerifyCod,TextSuccess:"کد با موفقیت تایید شد",errorHandler:errorHandlerForVerifyCode})
    };
    return (
        <StyledWrapper>
            <form onSubmit={handler} className="form mx-auto pt-14! space-y-6">
                <button type="button" onClick={() =>setstatus({ispending: false,OTPform: false,})} className="close">
                    <IoArrowBack className="rotate-180 size-8" />
                </button>
                <div className="info">
                    <span className="title">کد تایید را وارد کنید</span>
                    <p className="description">لطفا کدی که به شماره {phoneNumber} ارسال شده را جهت تایید وارد کنید</p>
                </div>

                <div className="input-fields" dir="ltr">
                    {Array.from({
                        length: OTP_LENGTH,
                    }).map((_, index) => (
                        <input key={index} ref={(element) => {inputRefs.current[index] = element;}} type="text" inputMode="numeric" autoComplete={index === 0 ? "one-time-code" : "off"} maxLength={1} value={getDigit(index)} onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} onPaste={handlePaste} aria-label={`رقم ${index + 1} کد تایید`}/>
                    ))}
                </div>
                <Timer hour={hour} minute={minute} second={second} />
                <div className="action-btns">
                    <Button_3 className={isButtonDisabled ? "opacity-20! cursor-not-allowed!" : ""} disabled={isButtonDisabled}>
                        {isTimerFinished ? "ارسال مجدد کد" : ispending ? "در حال ارسال" : "ثبت کد"}
                    </Button_3>
                </div>
            </form>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    .form {
        --glow-color: rgb(176, 255, 251);
        --btn-color: rgba(65, 65, 65, 0.508);
        border: 2px solid var(--glow-color);
        padding: 25px;
        display: flex;
        max-width: 420px;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        color: var(--glow-color);
        background-color: var(--btn-color);
        border-radius: 20px;
        position: relative;
    }
    .info {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .title {
        color: #fff;
        font-size: 1.6rem;
        font-weight: 900;
    }
    .description {
        color: #fff;
        margin-top: 10px;
        font-size: 1rem;
    }

    .input-fields {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .input-fields input {
        height: 2.5em;
        width: 2.5em;
        outline: none;
        text-align: center;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
        font-size: 1.5rem;
        color: #fff;
        border-radius: 12px;
        border: 2.5px solid rgba(253, 253, 253, 0.363);
        background-color: rgb(255 255 255 / 0.05);
        transition: 0.2s ease;
    }
    .input-fields input:focus {
        border: 1px solid rgb(99, 236, 241);
        box-shadow:
            inset -1px -1px 5px rgba(255, 255, 255, 0.6),
            inset 10px 10px 10px rgba(0, 0, 0, 0.25);
        transform: scale(1.05);
    }
    .action-btns {
        display: flex;
        gap: 0.5rem;
    }
    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        background-color: #494949;
        color: #ff0000;
        height: 40px;
        width: 40px;
        display: grid;
        place-items: center;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.5s ease;
    }
    .close:hover {
        background-color: rgba(255, 0, 0, 0.644);
        color: #fff;
    }
`;

export default VerifyCode;
