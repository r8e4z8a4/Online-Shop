import { BiDollar, BiHome } from "react-icons/bi";
import { BsBox2, BsFillMoonStarsFill, BsShop } from "react-icons/bs";
import { FaTruckArrowRight, FaUser } from "react-icons/fa6";
import Button_2 from "@/Components/Common/Buttons/Button_2";
import { TbSunHighFilled } from "react-icons/tb";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";
import NavItem from "@/Components/Templates/Dashboard/common/Sidebar/fragments/NavLinks/item";
import publicAsset from "@/lib/publicAsset.js";
const ModeratorLinks = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
    return (
        <>
            <div className="flex-between mb-5 border-b-2 pb-5 border-zinc-200 dark:border-dark-border">
                <img className="w-20 object-cover block!" src={publicAsset("Photos/logo.png")} alt="i cant open this logo" />
                <Button_2 className={'border-2 border-slate-300! dark:border-dark-border! size-10 flex-center! rounded-full'} handler={toggleTheme}>{theme==='light'?<BsFillMoonStarsFill/>:<TbSunHighFilled/>}</Button_2>
            </div>
            <NavItem bgColor="bg-zinc-500" iconColor="text-zinc-500" icon={<BiHome />} href="/dashboard/moderator/home" label="پیشخوان" />
            <NavItem bgColor="bg-green-500" iconColor="text-green-500" icon={<BsBox2 />} href="/dashboard/moderator/categories" label="دسته‌بندی‌ها" />
            <NavItem bgColor="bg-yellow-500" iconColor="text-yellow-500" icon={<BsBox2 />} href="/dashboard/moderator/products" label="محصولات" />
            <NavItem bgColor="bg-orange-500" iconColor="text-orange-500" icon={<FaTruckArrowRight />} href="/dashboard/moderator/orders" label="سفارشات" />
            <NavItem bgColor="bg-blue-500" iconColor="text-blue-500" icon={<FaUser />} href="/dashboard/moderator/users" label="کاربران" />
            <NavItem bgColor="bg-green-500" iconColor="text-green-500" icon={<BsShop />} href="/dashboard/moderator/sellers" label="فروشنده‌ها" />
            <NavItem bgColor="bg-red-500" iconColor="text-red-500" icon={<BiDollar />} href="/dashboard/moderator/offs" label="تخفیفات" />
        </>
    );
};
export default ModeratorLinks;
