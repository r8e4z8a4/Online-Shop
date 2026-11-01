import Buttons from "./Fragments/Buttons";
import { TbBooks, TbHome, TbInfoCircle, TbPhoneCall } from "react-icons/tb";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Button_5 from "@/Components/Common/Buttons/Button_5";
import SideBar from "@/Components/Common/Header/Fragments/SideBar";
import CategoryMegaMenu from "@/Components/Common/Header/Fragments/CategoryMegaMenu";
const Header = () => {
    const [positionHeader, setPositionHeader] = useState(false);
    useEffect(() => {
        const changeDisplayHeader = () => {
            setPositionHeader(window.scrollY > 400);
        };
        window.addEventListener("scroll", changeDisplayHeader);
        return () => {
            window.removeEventListener("scroll", changeDisplayHeader);
        };
    }, []);
    return (
        <header className="h-35">
            <nav className={clsx("fixed inset-x-0 top-0 z-2000 h-23 border-2 border-slate-300 px-5 shadow-[0_0_20px_2px_#03554e] transition-all duration-500 dark:border-dark-border dark:bg-dark-bg2/85 bg-yellow-200/60 hover:bg-yellow-200 hover:dark:bg-dark-bg2 flex-between", positionHeader ? "mx-auto h-16! max-w-full rounded-b-2xl" : "container top-6 rounded-2xl")}>
                <img className="hidden! w-20 object-cover lg:block!" src="/Photos/logo.png" alt="i cant open this logo" />
                <div className="hidden! gap-4! lg:flex!">
                    <CategoryMegaMenu position={positionHeader}/>
                    <div className="h-4 w-px bg-black/10 dark:bg-white" />
                    <Button_5 className="flex-ic gap-2" to="/">
                        <TbHome />
                        خانه
                    </Button_5>
                    <div className="h-4 w-px bg-black/10 dark:bg-white" />
                    <Button_5 className="flex-ic gap-2" to="/articles">
                        <TbBooks />
                        <span>مقالات</span>
                    </Button_5>
                    <div className="h-4 w-px bg-black/10 dark:bg-white" />
                    <Button_5 className="flex-ic gap-2" to="/about-us">
                        <TbInfoCircle />
                        <span>درباره ما</span>
                    </Button_5>
                    <div className="h-4 w-px bg-black/10 dark:bg-white" />
                    <Button_5 className="flex-ic gap-2" to="/contact-us">
                        <TbPhoneCall />
                        <span>تماس با ما</span>
                    </Button_5>
                </div>
                <SideBar/>
                <Buttons />
            </nav>
        </header>
    );
};
export default Header;
