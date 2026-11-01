import Tooltip from "@/Components/Common/Buttons/Tooltip";
import { useState } from "react";
import { FaComment } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router";
const UsefulButtons = () => {
    const [isCopied,setIseCopied]=useState(false)
    const copyURL=()=>{
        navigator.clipboard.writeText(location.href)
        setIseCopied(true)
        setTimeout(() => {
            setIseCopied(false)
        }, 3000);
    }
    return (
        <div className="flex-ic gap-3">
            <Tooltip handler={copyURL} text={isCopied?'آدرس کپی شد ✅':'اشتراک گذاری این صفحه'}>
                <MdContentCopy />
            </Tooltip>
            <Tooltip text={'نظرات کاربران'}>
                <a className="size-full rounded-full flex-center" href='#product-comments'>
                    <FaComment />
                </a>
            </Tooltip>
        </div>
    );
};

export default UsefulButtons;
