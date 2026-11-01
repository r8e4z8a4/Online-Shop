import clsx from "clsx";
import { useToggle } from "react-use";
import { TbBooks, TbHome, TbInfoCircle, TbPhoneCall, TbSunHighFilled } from "react-icons/tb";
import Button_5 from "@/Components/Common/Buttons/Button_5";
import { ThemeContext } from "@/Context/ThemeContext";
import { useContext } from "react";
import Button_2 from "@/Components/Common/Buttons/Button_2";
import { BsFillMoonStarsFill } from "react-icons/bs";
import ToggleButton from "@/Components/Common/Buttons/ToggleButton";
const SideBar = () => {
    const [isOpenMenu, toggle] = useToggle(false);
    const {theme,toggleTheme}=useContext(ThemeContext)
    return (
        <>
            <div onClick={toggle} className={clsx("fixed inset-0 z-50 bg-black/60 transition-opacity duration-300", isOpenMenu ? "opacity-100" : "pointer-events-none opacity-0")} />
            <aside className={clsx("fixed space-y-10 top-0 left-0 z-60 h-screen w-55 rounded-r-2xl dark:bg-dark-bg1 bg-white p-6 transition-transform duration-300", isOpenMenu ? "translate-x-0 shadow-[0_0_20px_2px_#03554e]" : "-translate-x-full")}>
                <div className="flex-between">
                    <Button_2 className={'border-2 border-slate-300 dark:border-dark-border size-10 flex-center! rounded-full'} handler={toggleTheme}>{theme==='light'?<BsFillMoonStarsFill/>:<TbSunHighFilled/>}</Button_2>
                    <img className="w-20 object-cover block!" src="/Photos/logo.png" alt="i cant open this logo" />
                </div>
                <div className="space-y-3">
                    <Button_5 handler={toggle} className="flex-ic gap-3" to="/">
                        <TbHome />
                        خانه
                    </Button_5>
                    <Button_5 handler={toggle} className="flex-ic gap-3" to="/categories">
                        <TbHome />
                        دسته بندی ها
                    </Button_5>
                    <Button_5 handler={toggle} className="flex-ic gap-3" to="/articles">
                        <TbBooks />
                        <span>مقالات</span>
                    </Button_5>
                    <Button_5 handler={toggle} className="flex-ic gap-3" to="/about-us">
                        <TbInfoCircle />
                        <span>درباره ما</span>
                    </Button_5>
                    <Button_5 handler={toggle} className="flex-ic gap-3" to="/contact-us">
                        <TbPhoneCall />
                        <span>تماس با ما</span>
                    </Button_5>
                </div>
            </aside>
            <div className="relative z-70 block lg:hidden">
                <ToggleButton isOpen={isOpenMenu} toggle={toggle} />
            </div>
        </>
    );
};

export default SideBar;
