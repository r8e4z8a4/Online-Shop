import Button_1 from "@/Components/Common/Buttons/Button_1";
import Button_2 from "@/Components/Common/Buttons/Button_2";
import Button_3 from "@/Components/Common/Buttons/Button_3";
import { AuthContext } from "@/Context/AuthContext";
import { CardContext } from "@/Context/CardContext";
import { ThemeContext } from "@/Context/ThemeContext";
import clsx from "clsx";
import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi2";
import { TbSunHighFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
const Buttons = () => {
    const {itemsCount}=useContext(CardContext)
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, isLoading } = useContext(AuthContext);
    const handler = () => {
        navigate(user?.roles[0]==='USER' ? "/dashboard/user" : user?.roles[0]==='ADMIN'?"/dashboard/moderator":"/auth");
    };
    return (
        <div className="flex-ic gap-3! text-sm">
            <Button_2 className={"border-2 border-slate-300 dark:border-dark-border size-10 hidden! md:flex-center! rounded-full"} handler={toggleTheme}>
                {theme === "light" ? <BsFillMoonStarsFill /> : <TbSunHighFilled />}
            </Button_2>
            <Button_1 handler={handler} className="border-2 border-slate-300 dark:border-dark-border">
                <p>{isLoading ? "درحال بارگذاری ..." : user ? "پنل کاربری" : "ورود | ثبت نام"}</p>
            </Button_1>
            <Link to="/cart" className="relative inline-block">
                <Button_3 className="border-2 border-slate-300 dark:border-dark-border rounded-lg size-10 p-0!">
                    <HiShoppingCart className="text-xl" />
                </Button_3>
                <div className={clsx('absolute -top-1.5 -right-1 z-10 size-5 bg-red-800 rounded-md text-sm flex items-center justify-center text-white',itemsCount?'':'hidden')}>
                    <span>{itemsCount}</span>
                </div>
            </Link>
        </div>
    );
};

export default Buttons;
