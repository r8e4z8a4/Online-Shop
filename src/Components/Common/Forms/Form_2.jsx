import POSThandler from "@/API/POSThandler";
import Button_4 from "@/Components/Common/Buttons/Button_4";
import clsx from "clsx";
import { useActionState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import styled from "styled-components";
import contactUsSchema from "@/Validators/contactus";
import { validate } from "@/Validators";
import ManageRequest from "@/API/ManageRequest";
const Form_2 = () => {
    const handler = async (prevData, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const subject = formData.get("subject");
        const content = formData.get("content");
        if (!validate(contactUsSchema, { name, phone, subject, content })) {
            return { ...prevData, name, phone, subject, content };
        }
        try {
            const promise = POSThandler('contact-us',{ name, phone, subject, content });
            ManageRequest({promise,TextLoader:"در حال ارسال...",TextSuccess:"اطلاعات با موفقیت ثبت شد",TextError:"ارسال اطلاعات ناموفق بود"})
            await promise;
            return { ...prevData, name: "", phone: "", subject: "", content: "", serverError: null, success: true };
        } catch (error) {
            return { ...prevData, name, phone, subject, content, serverError: error.message };
        }
    };
    const [form, action, isPending] = useActionState(handler, { name: "", phone: "", subject: "", content: "", serverError: null, success: false });
    return (
        <StyledWrapper>
            <div className="login-box dark:bg-dark-bg1 bg-slate-200">
                <form action={action}>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="user-box sm:col-span-1 col-span-2">
                            <input defaultValue={form.name} className="border-b-2! dark:border-dark-border! border-slate-500!" required name="name" type="text" />
                            <label className="dark:text-slate-400 text-slate-700">نام و نام خانوادگی :</label>
                        </div>
                        <div className="user-box sm:col-span-1 col-span-2">
                            <input defaultValue={form.phone} className="border-b-2! dark:border-dark-border! border-slate-500!" required name="phone" type="tel" />
                            <label className="dark:text-slate-400 text-slate-700">شماره موبایل :</label>
                        </div>
                        <div className="user-box col-span-2">
                            <input defaultValue={form.subject} className="border-b-2! dark:border-dark-border! border-slate-500!" required name="subject" type="text" />
                            <label className="dark:text-slate-400 text-slate-700">موضوع شما :</label>
                        </div>
                        <div className="user-box col-span-2">
                            <textarea defaultValue={form.content} className="w-full border-b-2! dark:border-dark-border! border-slate-500! py-3! px-5! min-h-30" required name="content"></textarea>
                            <label className="dark:text-slate-400 text-slate-700">محتوا :</label>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                        <Button_4>
                            <Link to={"/"}>انصراف</Link>
                        </Button_4>
                        <button disabled={isPending} className={clsx("dark:hover:bg-dark-border! dark:hover:text-slate-400! text-green-800 hover:bg-green-400 px-2 py-2 sm:px-5", isPending ? "opacity-30" : "")} type="submit">
                            <span className="bg-gray-800!" />
                            <span className="bg-gray-800!" />
                            <span className="bg-gray-800!" />
                            <span className="bg-gray-800!" />
                            {isPending ? "در حال ارسال ..." : " ثبت و ارسال"}
                        </button>
                    </div>
                </form>
            </div>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    .login-box {
        width: 100%;
        padding: 35px 20px;
        margin: 20px auto;
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
    }
    .login-box {
        --autofill-bg: #e2e8f0;
        --autofill-text: #000;
    }
    .login-box .user-box input:-webkit-autofill,
    .login-box .user-box input:-webkit-autofill:hover,
    .login-box .user-box input:-webkit-autofill:focus,
    .login-box .user-box input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 1000px var(--autofill-bg) inset !important;
        -webkit-text-fill-color: var(--autofill-text) !important;
        caret-color: var(--autofill-text);
    }
    html.dark & .login-box {
        --autofill-bg: #081e29;
        --autofill-text: #fff;
    }
    .login-box p:first-child {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
    .login-box .user-box {
        position: relative;
    }
    .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        outline: none;
        background: transparent;
        padding: 5px 8px;
    }
    .login-box .user-box textarea {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        outline: none;
        background: transparent;
    }
    .login-box .user-box label {
        position: absolute;
        top: 0px;
        right: 0;
        padding: 10px 0;
        font-size: 13px;
        pointer-events: none;
        transition: 0.5s;
    }
    .login-box .user-box textarea ~ label {
        top: 80px;
    }
    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
        top: -33px;
        right: 0;
        color: #fb2c36;
        font-size: 12px;
    }
    .login-box .user-box textarea:focus ~ label,
    .login-box .user-box textarea:valid ~ label {
        top: -35px;
        right: 0;
        color: #fb2c36;
        font-size: 12px;
    }
    .login-box form button {
        position: relative;
        display: inline-block;
        font-weight: bold;
        font-size: 13px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        margin-top: 40px;
        letter-spacing: 3px;
    }
    .login-box button:hover {
        border-radius: 15px;
    }

    .login-box button span {
        position: absolute;
        display: block;
    }

    .login-box button span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #fff);
        animation: btn-anim1 1.5s linear infinite;
    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }

        50%,
        100% {
            left: 100%;
        }
    }

    .login-box button span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #fff);
        animation: btn-anim2 1.5s linear infinite;
        animation-delay: 0.375s;
    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }

        50%,
        100% {
            top: 100%;
        }
    }

    .login-box button span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #fff);
        animation: btn-anim3 1.5s linear infinite;
        animation-delay: 0.75s;
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }

        50%,
        100% {
            right: 100%;
        }
    }

    .login-box button span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #fff);
        animation: btn-anim4 1.5s linear infinite;
        animation-delay: 1.125s;
    }

    @keyframes btn-anim4 {
        0% {
            bottom: -100%;
        }

        50%,
        100% {
            bottom: 100%;
        }
    }

    .login-box p:last-child {
        color: #aaa;
        font-size: 14px;
    }

    .login-box button.a2 {
        color: #fff;
        text-decoration: none;
    }

    .login-box button.a2:hover {
        background: transparent;
        color: #aaa;
        border-radius: 5px;
    }
`;

export default Form_2;
