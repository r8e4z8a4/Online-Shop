import clsx from "clsx";
import { HiX } from "react-icons/hi";
const Drawer = ({ children, title, className, isOpen, onClose,action }) => {
    return (
        <>
            <div onClick={onClose} className={clsx("fixed inset-0 z-50 transition-[transform_opacity] duration-500 bg-black/30", isOpen ? "opacity-100" : "opacity-0 invisible")}>
                <div onClick={(e) => e.stopPropagation()} className={clsx("absolute inset-y-0 overflow-auto right-0 max-w-md bg-white dark:bg-[#0e2f43] transition-transform duration-500", isOpen ? "translate-x-0" : "translate-x-full", className)}>
                    <div className="flex items-center justify-between border-b-2 border-zinc-200 dark:border-dark-border p-4">
                        <p className="font-medium">{title}</p>
                        <button onClick={onClose} className="text-zinc-600">
                            <HiX className="size-6 dark:text-zinc-400" />
                        </button>
                    </div>
                    <form action={action} className="p-4">{children}</form>
                </div>
            </div>
        </>
    );
};
export default Drawer;