const DropdownItem = ({ children, onClick, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
        const dropdowns = document.querySelectorAll("[name='dropdown']");
        dropdowns.forEach((dropdown) => {
            dropdown.classList.add("hide-dropdown");
        });
        dropdowns.forEach((dropdown) => {
            dropdown.classList.add("hide-dropdown");
        });
    };
    return (
        <div className="flex items-center last:border-t **:flex **:items-center *:gap-2 border-zinc-200 dark:border-dark-border gap-2 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100 dark:hover:bg-[#2A2D53] focus:bg-gray-100 grow w-full select-none cursor-pointer" onClick={handleClick} {...props}>
            {children}
        </div>
    );
};
export default DropdownItem;