import { useState } from "react";
import DropdownContainer from "./DropdownContainer";
const Dropdown = ({ Trigger, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handler = {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
    };
    return (
        <DropdownContainer {...handler}>
            <div name="dropdown-trigger cursor-pointer">{Trigger}</div>
            <div name="dropdown" className={`${className} bg-white dark:*:text-white dark:bg-dark-bg2 flex flex-col! gap-0! overflow-hidden z-5 rounded-lg primary-border dark:border-dark-border shadow-md absolute top-[60%] duration-500 transition-all ${isOpen ? "menu-opened" : "opacity-0 invisible"}`}>
                {children}
            </div>
        </DropdownContainer>
    );
};
export default Dropdown;
