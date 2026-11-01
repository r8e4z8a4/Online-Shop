import { useLocation } from "react-router";
import Logout from "../../Templates/Dashboard/common/Logout";
import ModeratorLinks from "../../Templates/Dashboard/templates/moderator/ModeratorLinks";
import UserLinks from "@/Components/Templates/Dashboard/templates/user/UserLinks";
import { useToggle } from "react-use";
import ToggleButton from "@/Components/Common/Buttons/ToggleButton";
import clsx from "clsx";
import Button_4 from "@/Components/Common/Buttons/Button_4";
const index = () => {
    const URL = useLocation().pathname;
    const [isOpenMenu, toggle] = useToggle(false);
    return (
        <>
            <aside className="w-70 bg-zinc-100/75 dark:bg-dark-bg2 shadow-xl flex-col justify-between h-dvh! sticky top-0! right-0 border-l border-zinc-200 dark:border-dark-border duration-500 hidden min-[591px]:flex">
                <div>
                    <main className="p-3 space-y-1.5">{URL.includes("/dashboard/user") ? <UserLinks /> : URL.includes("/dashboard/moderator") ? <ModeratorLinks /> : null}</main>
                </div>
                <Logout />
            </aside>
            <div className="block min-[591px]:hidden">
                <div onClick={toggle} className={clsx("fixed inset-0 z-50 bg-black/60 transition-opacity duration-300", isOpenMenu ? "opacity-100" : "pointer-events-none opacity-0")} />
                <aside className={clsx("fixed flex-col justify-between top-0 left-0 z-60 h-screen w-55 rounded-r-2xl dark:bg-dark-bg1 bg-white p-6 transition-transform duration-300", isOpenMenu ? "translate-x-0 shadow-[0_0_20px_2px_#03554e]" : "-translate-x-full")}>
                    <main className="p-3 space-y-1.5">{URL.includes("/dashboard/user") ? <UserLinks /> : URL.includes("/dashboard/moderator") ? <ModeratorLinks /> : null}</main>
                    <Logout />
                </aside>
                <Button_4 className={'fixed! top-5 right-5 z-50! flex! justify-center! items-center! size-15 rounded-md dark:bg-dark-bg2! bg-zinc-300! border-zinc-400! border dark:border-dark-border!'}>
                  <ToggleButton isOpen={isOpenMenu} toggle={toggle} />
                </Button_4>
            </div>
        </>
    );
};

export default index;
