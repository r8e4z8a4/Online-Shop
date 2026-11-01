import { useContext, useState } from "react";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { ThemeContext } from "@/Context/ThemeContext";
const MobileCategoryAccordion = ({ category, onCategoryClick }) => {
    const { theme } = useContext(ThemeContext);
    const [openItems, setOpenItems] = useState({});
    const isDark = theme === "dark";
    const toggleSubCategory = (id) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const subCategories = category?.subCategories ?? [];
    return (
        <div className="w-full">
            <h1
                className={`
                    mb-4
                    px-1
                    text-base
                    font-bold
                    ${isDark ? "text-white" : "text-slate-900"}
                `}
            >
                {category?.title}
            </h1>
            <div className="space-y-2">
                {subCategories.map((subCategory) => {
                    const subSubCategories = subCategory?.subCategories ?? [];

                    const hasChildren = subSubCategories.length > 0;

                    const isOpen = Boolean(openItems[subCategory._id]);

                    return (
                        <div
                            key={subCategory._id}
                            className={`
                                overflow-hidden
                                rounded-xl
                                border
                                transition-colors
                                duration-200

                                ${isDark ? "border-dark-border bg-dark-bg1" : "border-slate-200 bg-white"}
                            `}
                        >
                            <button
                                type="button"
                                disabled={!hasChildren}
                                onClick={() => toggleSubCategory(subCategory._id)}
                                aria-expanded={hasChildren ? isOpen : undefined}
                                className={`
                                    flex
                                    min-h-14
                                    w-full
                                    items-center
                                    justify-between
                                    gap-3
                                    px-4
                                    py-3
                                    text-right
                                    transition-colors
                                    duration-200

                                    ${isDark ? "text-white hover:bg-dark-bg2" : "text-slate-800 hover:bg-slate-50"}
                                `}
                            >
                                <span className="truncate text-sm font-medium">{subCategory.title}</span>

                                {hasChildren && (
                                    <FiChevronDown
                                        size={20}
                                        className={`
                                            shrink-0
                                            transition-transform
                                            duration-300
                                            ${isOpen ? "rotate-180" : ""}
                                        `}
                                    />
                                )}
                            </button>
                            {hasChildren && (
                                <div
                                    className={`
                                        grid
                                        transition-[grid-template-rows]
                                        duration-300
                                        ease-out
                                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                                    `}
                                >
                                    <div className="min-h-0 overflow-hidden">
                                        <div
                                            className={`
                                                border-t
                                                px-3
                                                py-2

                                                ${isDark ? "border-dark-border" : "border-slate-200"}
                                            `}
                                        >
                                            <div className="space-y-1">
                                                {subSubCategories.map((subSubCategory) => (
                                                    <button
                                                        key={subSubCategory._id}
                                                        type="button"
                                                        onClick={() => onCategoryClick?.(subSubCategory)}
                                                        className={`
                                                                flex
                                                                min-h-11
                                                                w-full
                                                                items-center
                                                                justify-between
                                                                rounded-lg
                                                                px-3
                                                                py-2
                                                                text-right
                                                                text-sm
                                                                transition-colors
                                                                duration-200

                                                                ${isDark ? "text-slate-300 hover:bg-dark-bg2 hover:text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                                                            `}
                                                    >
                                                        <span className="truncate">{subSubCategory.title}</span>

                                                        <FiChevronLeft size={16} className={isDark ? "text-slate-500" : "text-slate-400"} />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileCategoryAccordion;
