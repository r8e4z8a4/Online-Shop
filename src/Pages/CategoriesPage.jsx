import Loader_2 from "@/Components/Common/Loaders/Loader_2";
import MobileCategoryAccordion from "@/Components/Templates/Categories/MobileCategoryAccordion";
import useCategories from "@/Hooks/useCategories";
import { useEffect, useState } from "react";
const CategoriesPage = () => {
    const { data, fetchData } = useCategories();
    const [activeCategory, setActiveCategory] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        if (data?.categories?.length && !activeCategory) {
            setActiveCategory(data.categories[0]);
        }
    }, [data?.categories, activeCategory]);
    if (data.isLoading) {
        return (
            <section className="h-screen w-screen">
                <div className="fixed inset-0 z-2001 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" />
                    <Loader_2 />
                </div>
            </section>
        );
    }
    return (
        <section className="h-screen overflow-hidden">
            <div className="flex h-full">
                <aside
                    className="
                        h-full
                        w-25
                        shrink-0
                        overflow-x-hidden
                        overflow-y-auto
                        scrollbar-none
                        border-l
                        dark:border-dark-border
                        dark:bg-dark-bg1
                    "
                >
                    <ul>
                        {data.categories?.map((category) => {
                            const isActive =
                                activeCategory?._id ===
                                category._id;

                            return (
                                <li key={category._id}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(
                                                category
                                            )
                                        }
                                        className={`
                                            flex
                                            size-25
                                            w-full
                                            items-center
                                            justify-center
                                            p-2
                                            text-center
                                            text-sm
                                            transition-colors
                                            duration-200

                                            ${
                                                isActive
                                                    ? "bg-blue-50 text-blue-600 dark:bg-[#2A2D53]/60 dark:text-blue-400"
                                                    : "hover:bg-slate-50 dark:hover:bg-dark-bg2"
                                            }
                                        `}
                                    >
                                        <span className="line-clamp-2">
                                            {category.title}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
                <main
                    className="
                        h-full
                        min-w-0
                        flex-1
                        overflow-x-hidden
                        overflow-y-auto
                        scrollbar-none
                        p-3
                        dark:bg-dark-bg2
                    "
                >
                    {activeCategory && (
                        <MobileCategoryAccordion
                            category={activeCategory}
                            onCategoryClick={(selectedCategory) => {
                                console.log(
                                    "Selected level 3:",
                                    selectedCategory
                                );
                            }}
                        />
                    )}
                </main>
            </div>
        </section>
    );
};

export default CategoriesPage;