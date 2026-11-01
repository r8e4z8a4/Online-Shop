import clsx from "clsx";
import { useEffect } from "react";
import { HiX } from "react-icons/hi";
const Modal = ({ children, title, className, isOpen, onOpenChange,alert=false }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div onClick={onOpenChange} className="absolute inset-0 bg-black/50" />
                <div onClick={(e) => e.stopPropagation()} className={clsx("relative transition-all duration-300 bg-white dark:bg-dark-bg1 rounded-lg shadow-xl  max-w-lg w-full mx-4 flex flex-col max-h-[90vh] overflow-hidden", isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0", className)}>
                    {!alert&&
                    <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-dark-border shrink-0">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <button onClick={onOpenChange} className="text-zinc-500 transition">
                            <HiX className="size-6" />
                        </button>
                    </div>}
                    <div className="flex-1 overflow-y-auto px-2">{children}</div>
                </div>
            </div>
        </>
    );
};
export default Modal;
