import clsx from "clsx";
import { BiChevronLeft } from "react-icons/bi";
import { useToggle } from "react-use";

const AccordionItem = ({ label, content }) => {
  const [isOpen,toggle]=useToggle(false)
    return (
        <div>
            <div onClick={toggle} className={clsx('px-4 flex-between select-none text-sm flex-ic duration-300 hover:bg-slate-200 dark:hover:bg-dark-bg2 active:*:scale-95 min-h-20 cursor-pointer',isOpen?'dark:bg-dark-border/70 bg-gray-200':'')} tabIndex="1">
                <div className="duration-300 cursor-pointer w-full">{label}</div>
                <BiChevronLeft className={clsx('transition-all duration-200',isOpen?'-rotate-90 size-10':'size-6')}/>
            </div>
            <div className={clsx('duration-700 transition-all text-sm text-slate-500',isOpen?'max-h-80 px-10 py-5 visible overflow-visible opacity-100':'opacity-0 invisible max-h-0 overflow-hidden')}>{content}</div>
        </div>
    );
};

export default AccordionItem;
