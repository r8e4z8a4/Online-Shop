import POSThandler from "@/API/POSThandler";
import ManageRequest from "@/API/ManageRequest";
import clsx from "clsx";
import { IoArrowBack } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import styled from "styled-components";
const SendCode = ({ ispending, setPhoneNumber,phoneNumber ,setstatus}) => {
    const navigate = useNavigate();
    const successHandler=()=>{
        setstatus({ ispending: false, OTPform: true });
    }
    const errorHandler=()=>{
        setstatus({ ispending: false, OTPform: false });
    }
    const handler = async (e) => {
        e.preventDefault();
        if (/^09\d{9}$/.test(phoneNumber)) {
            setstatus({ ispending: true, OTPform: false });
            const promise = POSThandler("auth/send", { phone: phoneNumber });
            ManageRequest({promise,TextLoader:"در حال ارسال کد",successHandler,TextSuccess:"کد با موفقیت ارسال شد",errorHandler,TextError:"ارسال اطلاعات نا موفق بود لطفا دوباره تلاش کنید"})
        } else {
            toast.error("شماره موبایل صحیح نمی باشد");
        }
    };
    return (
        <StyledWrapper>
            <div className="wrapper flex-center">
                <form onSubmit={handler} className="form dark:bg-dark-bg2! bg-purple-600! w-full max-w-100 rounded-xl shadow-[0_0_80px_0_rgba(0,0,0,.5)] h-120">
                    <div className="flex-between w-[85%] pl-7">
                        <IoArrowBack onClick={() => navigate(-1)} className="cursor-pointer rotate-180 size-8 text-red-700" />
                        <span className="title text-white! dark:text-[rgb(170,170,170)]!">ورود یا ثبت نام</span>
                        <p></p>
                    </div>
                    <p className="text-white">لطفا شماره موبایل خود را وارد کنید</p>
                    <div className="input-container">
                        <MdPhoneIphone className="text-slate-400" />
                        <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required className="input text-end focus:ring-0" type="tel" placeholder="شماره تلفن" />
                    </div>
                    <div className="login-button">
                        <button disabled={ispending} type="submit" className={clsx("input", ispending ? "opacity-40! cursor-not-allowed!" : "")}>
                            {ispending ? "در حال ارسال" : " ارسال کد"}
                        </button>
                    </div>
                    <div className="texture" />
                </form>
            </div>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    .wrapper {
        place-content: center;
        z-index: -2;
    }

    .form {
        display: grid;
        place-items: center;
        gap: 3rem;
        border: 1px solid transparent;
        -o-border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
        border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
        border-width: 0 3px 0px 3px;
        background: radial-gradient(100% 61.73% at 100% 50%, rgba(255, 224, 166, 0.05) 0%, transparent 100%), radial-gradient(91.09% 56.23% at 0% 50%, rgba(255, 224, 166, 0.05) 0%, transparent 100%);
        position: relative;
    }
    .form::before,
    .form::after {
        content: "";
        position: absolute;
        border: 1px solid transparent;
        border: inherit;
        z-index: -1;
    }
    .form::before {
        inset: -1rem;
        opacity: 15%;
    }
    .form::after {
        inset: -2rem;
        opacity: 5%;
    }
    .form .title {
        color: white;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .form .input-container {
        display: flex;
        align-items: center;
        background: radial-gradient(47.3% 73.08% at 50% 94.23%, rgba(255, 255, 255, 0.1) 5%, rgba(0, 0, 0, 0) 100%);
        border: 1px solid transparent;
        -o-border-image: radial-gradient(circle, rgba(255, 255, 255, 0.445) 0%, rgba(0, 0, 0, 0) 100%) 1;
        border-image: radial-gradient(circle, rgba(255, 255, 255, 0.445) 0%, rgba(0, 0, 0, 0) 100%) 1;
        border-width: 0 0 1px 0;
    }
    .form .input-container .input {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        color: white;
    }
    .form .input-container .input:focus {
        outline: none !important;
        color: #ffe0a6;
    }
    .form .input-container:focus-within {
        background: radial-gradient(47.3% 73.08% at 50% 94.23%, rgba(255, 224, 166, 0.1) 5%, rgba(0, 0, 0, 0) 100%);
        -o-border-image: radial-gradient(circle, #ffe0a6 0%, transparent 100%) 1;
        border-image: radial-gradient(circle, #ffe0a6 0%, transparent 100%) 1;
    }
    .form .input-container:focus-within svg g {
        stroke: #ffe0a6;
    }
    .form .login-button {
        width: 50%;
        position: relative;
        transition: all 0.2s ease-in-out;
    }
    .form .login-button .input {
        cursor: pointer;
        padding: 1rem;
        width: 100%;
        background: radial-gradient(100% 45% at 100% 50%, rgba(255, 224, 166, 0.084) 0%, rgba(115, 115, 115, 0) 100%), radial-gradient(100% 45% at 0% 50%, rgba(255, 224, 166, 0.084) 0%, rgba(115, 115, 115, 0) 100%);
        border: 1px solid transparent;
        -o-border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
        border-image: linear-gradient(transparent, #ffe0a6, transparent) 1;
        border-width: 0 1px 0 1px;
        text-align: center;
        color: #ffe0a6;
        font-size: 1rem;
    }
    .form .login-button::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3764705882) 0.5px, transparent 0.5px);
        background-size: 0.1px 3px;
        mix-blend-mode: soft-light;
        -webkit-mask-image: radial-gradient(40% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%);
        mask-image: radial-gradient(40% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%);
    }
    .form .login-button:hover {
        animation: flicker 0.5s infinite;
        width: 60%;
    }
    .form .login-button:active {
        width: 75%;
    }
    .form .texture {
        position: absolute;
        background-image: linear-gradient(0deg, #ffffff 1px, transparent 1px);
        background-size: 1px 5px;
        inset: 0;
        mix-blend-mode: soft-light;
        -webkit-mask-image: radial-gradient(30% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%);
        mask-image: radial-gradient(30% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%);
        pointer-events: none;
        animation: movingLines 1s linear infinite;
    }

    @keyframes flicker {
        0% {
            filter: brightness(100%);
        }
        10% {
            filter: brightness(80%);
        }
        20% {
            filter: brightness(120%);
        }
        30% {
            filter: brightness(90%);
        }
        40% {
            filter: brightness(110%);
        }
        50% {
            filter: brightness(100%);
        }
        60% {
            filter: brightness(85%);
        }
        70% {
            filter: brightness(95%);
        }
        80% {
            filter: brightness(105%);
        }
        90% {
            filter: brightness(115%);
        }
        100% {
            filter: brightness(100%);
        }
    }
    @keyframes movingLines {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 0 5px;
        }
`;

export default SendCode;
