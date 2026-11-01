import ModeratorCategoriesTable from "@/Components/Templates/Dashboard/templates/moderator/categories/ModeratorCategoriesTable";
import PageLabel from "@/Components/Templates/Dashboard/common/PageLabel";
import { useEffect } from "react";
import useCategories from "@/Hooks/useCategories";
import ModeratorSubSubCategoriesTable from "@/Components/Templates/Dashboard/templates/moderator/categories/ModeratorSubSubCategoriesTable";
import useSubSubCategories from "@/Hooks/useSubSubCategories";
import ModeratorSubCategoriesTable from "@/Components/Templates/Dashboard/templates/moderator/categories/ModeratorSubCategoriesTable";
const ModeratorCategories = () => {
    const { data: CategoryData, fetchData: fetchCategories } = useCategories();
    const { data: SubSubCategoryData, fetchData: fetchSubSubCategories } = useSubSubCategories();
    const createSubCategories = () => {
        const SubCategories = [];
        CategoryData.categories.forEach((Category) => {
            SubCategories.push(...Category.subCategories);
        });
        return SubCategories;
    };
    const SubCategoryData = { isLoading: CategoryData?.isLoading, error: CategoryData?.error, subcategories: createSubCategories() };
    useEffect(() => {
        fetchCategories();
        fetchSubSubCategories();
    }, []);
    return (
        <div>
            <PageLabel label="مدیریت دسته‌بندی های فروشگاه" />
            <ModeratorCategoriesTable CategoryData={CategoryData} fetchCategories={fetchCategories} fetchSubSubCategories={fetchSubSubCategories}/>
            <ModeratorSubCategoriesTable SubCategoryData={SubCategoryData} CategoryData={CategoryData} fetchSubSubCategories={fetchSubSubCategories} fetchCategories={fetchCategories}/>
            <ModeratorSubSubCategoriesTable SubCategories={SubCategoryData.subcategories} SubSubCategoryData={SubSubCategoryData} CategoryData={CategoryData} fetchSubSubCategories={fetchSubSubCategories} fetchCategories={fetchCategories} />
        </div>
    );
};
export default ModeratorCategories;
