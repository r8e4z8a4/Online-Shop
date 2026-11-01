import Star from "@/Components/Common/Forms/Star";
import { useCommentForm } from "@/Hooks/useCommentForm";
import clsx from "clsx";
import styled from "styled-components";
const CommentForm = ({productID}) => {
    const { action, isPending, form } = useCommentForm(productID);
    return (
        <StyledWrapper className="col-span-2 min-[885px]:col-span-1">
            <div className="login-box dark:bg-dark-bg1 bg-slate-200">
                <form action={action}>
                    <Star/>
                    <div className="user-box col-span-2">
                        <textarea defaultValue={form.Comment} className="w-full border-b-2! dark:border-dark-border! border-slate-500! py-3! px-5! min-h-30" name="Comment" placeholder=" " />
                        <label className="dark:text-slate-400 text-slate-700">کامنت :</label>
                    </div>
                    <button disabled={isPending} className={clsx("dark:hover:bg-dark-border! mx-auto dark:hover:text-slate-400! text-green-800 hover:bg-green-400 px-2 py-2 sm:px-5", isPending ? "opacity-30" : "")} type="submit">
                        <span className="bg-gray-800!" />
                        <span className="bg-gray-800!" />
                        <span className="bg-gray-800!" />
                        <span className="bg-gray-800!" />
                        {isPending ? "در حال ارسال ..." : "ثبت و ارسال"}
                    </button>
                </form>
            </div>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    .login-box {
        width: 100%;
        padding: 35px 20px;
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
    }

    .login-box {
        --autofill-bg: #e2e8f0;
        --autofill-text: #000;
    }

    /* =========================
       Autofill
    ========================= */

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

    /* =========================
       User Box
    ========================= */

    .login-box .user-box {
        position: relative;
    }

    .login-box .user-box input {
        width: 100%;
        padding: 5px 8px;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        outline: none;
        background: transparent;
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

    /* =========================
       Label
    ========================= */

    .login-box .user-box label {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 0;
        font-size: 13px;
        pointer-events: none;
        transition: 0.5s;
    }

    .login-box .user-box textarea ~ label {
        top: 80px;
    }

    /* =========================
       Floating Label - Input
    ========================= */

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:not(:placeholder-shown) ~ label {
        top: -33px;
        right: 0;
        color: #fb2c36;
        font-size: 12px;
    }

    /* =========================
       Floating Label - Textarea
    ========================= */

    .login-box .user-box textarea:focus ~ label,
    .login-box .user-box textarea:not(:placeholder-shown) ~ label {
        top: -35px;
        right: 0;
        color: #fb2c36;
        font-size: 12px;
    }

    /* =========================
       Button
    ========================= */

    .login-box form button {
        position: relative;
        display: block;
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

    /* Top */
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

    /* Right */
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

    /* Bottom */
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

    /* Left */
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

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }

        50%,
        100% {
            top: 100%;
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

export default CommentForm;
