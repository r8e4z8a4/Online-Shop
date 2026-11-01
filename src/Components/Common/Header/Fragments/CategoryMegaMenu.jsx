import useCategories from "@/Hooks/useCategories";
import { useEffect, useState } from "react";
import { TbCategory, TbChevronLeft } from "react-icons/tb";
import { Link } from "react-router";
const CategoryMegaMenu = ({position}) => {
  const { data ,fetchData} = useCategories();
  useEffect(()=>{
    fetchData()
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => {
    setIsOpen(true);
    if (data.categories.length && !activeCategory) {
      setActiveCategory(data.categories[0]);
    }
  };
  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose} className="">
      <button className="flex! items-center! gap-1! text-shadow-teal-800 font-medium">
        <TbCategory />
        <span>دسته‌بندی</span>
      </button>
      {isOpen && !data.isLoading && data.categories.length > 0 && (
        <div className={`absolute inset-x-0 z-50 flex bg-white dark:bg-[#2A2D53] border-2 dark:border-dark-border border-slate-400 rounded-lg shadow-xl ${position?'top-10.5 right-80':'top-14.5 right-40'}`}>
            <ul className="flex w-[25%] text flex-col gap-0 border-l border-slate-100 py-3!">
              {data.categories?.map((category) => (
                  <li onMouseEnter={() => setActiveCategory(category)} key={category._id}>
                    <Link to={`category/${category.slug}`} className={`flex-between gap-2! pl-4 pr-7 py-2.5 text-sm transition-colors rounded-xl ${activeCategory?._id === category._id ? "bg-blue-100 dark:bg-dark-bg1/70 text-blue-600 font-medium" : "hover:bg-slate-50 dark:hover:bg-dark-bg2"}`}>
                      <span>{category.title}</span>
                      <TbChevronLeft className="text-xs opacity-50" />
                    </Link>
                  </li>
              ))}
            </ul>
            <div className="flex grow p-5">
              {activeCategory?.subCategories?.length > 0 ? (
                <div className="grid grid-cols-4 w-full gap-x-6 gap-y-4">
                  {activeCategory?.subCategories?.map((sub) => (
                    <div key={sub._id} className="flex! flex-col! gap-0!">
                      <Link to={`/category/${activeCategory.slug}/${sub.slug}`} className="flex! items-center! gap-1! text-sm font-bold hover:text-blue-600 pb-2! mb-2! border-b-2 border-green-700">
                        <TbChevronLeft className="text-xs" />
                        <span>{sub.title}</span>
                      </Link>
                      <ul className="flex! flex-col! gap-1.5!">
                        {sub.subCategories?.map((leaf) => (
                          <li key={leaf._id}>
                            <Link to={`/category/${activeCategory.slug}/${sub.slug}/${leaf.slug}`} className="text-xs text-slate-500 hover:text-blue-600">
                              {leaf.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm">
                  زیردسته‌ای برای این دسته‌بندی وجود ندارد.
                </p>
              )}
            </div>
          </div>
      )}
    </div>
  );
};
export default CategoryMegaMenu;