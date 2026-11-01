import { useEffect, useState } from "react";
const CascadeCategories = ({ categories, defaultPath = [] }) => {
    const [path, setPath] = useState(defaultPath);
    useEffect(() => {
        setPath(defaultPath);
    }, [defaultPath]);
    const levels = [categories];
    path.forEach((id, index) => {
        const currentOptions = levels[index];
        if (!currentOptions) return;
        const selectedCategory = currentOptions.find((category) => category._id === id);
        if (selectedCategory?.subCategories?.length) {
            levels.push(selectedCategory.subCategories);
        }
    });
    const handleSelect = (levelIndex, id) => {
        setPath((prevPath) => [...prevPath.slice(0, levelIndex), id]);
    };
    return (
        <div className="space-y-3 grow">
            {levels.map((options, index) => {
                if (!options?.length) return <p className="text-red-500" key={index}>دسته بندی وجود ندارد</p>;
                return (
                    <select key={index} name="category" value={path[index] || ""} onChange={(event) => handleSelect(index, event.target.value)} className="w-full h-10 text-sm rounded-md outline-none primary-border dark:border-dark-border px-3 bg-white dark:bg-dark-bg1/65">
                        <option value="" disabled className="dark:text-zinc-400!">
                            انتخاب دسته‌بندی
                        </option>
                        {options.map((option) => (
                            <option key={option._id} value={option._id} className="dark:bg-[#2A2D53]">
                                {option.title}
                            </option>
                        ))}
                    </select>
                );
            })}
        </div>
    );
};
export default CascadeCategories;