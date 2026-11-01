import { useState } from "react";
import Table from "@/Components/Templates/Dashboard/common/Table";
import TableToolbar from "@/Components/Templates/Dashboard/common/Table/elements/TableToolbar";
import TableHead from "@/Components/Templates/Dashboard/common/Table/elements/TableHead";
import TableRow from "@/Components/Templates/Dashboard/common/Table/elements/TableRow";
import TableCell from "@/Components/Templates/Dashboard/common/Table/elements/TableCell";
import TableBody from "@/Components/Templates/Dashboard/common/Table/elements/TableBody";
import Button_6 from "@/Components/Common/Buttons/Button_6";
import { VscDebugRestart } from "react-icons/vsc";
import CreateSubCategoryModal from "@/Components/Templates/Dashboard/templates/moderator/categories/CreateSubCategoryModal";
import ManageSubCategoryDropdown from "@/Components/Templates/Dashboard/templates/moderator/categories/ManageSubCategoryDropdown";
const ModeratorSubCategoriesTable = ({SubCategoryData, CategoryData, fetchSubSubCategories, fetchCategories}) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
        const findLable=(parentID)=>{ 
            const category=CategoryData.categories.find(category=>{
                return category._id==parentID 
            })
            return category?.title
        }
    const onSuccess=()=>{
        fetchCategories(true)        
        fetchSubSubCategories(true)            
    }
    return (
        <div className="mb-30">
            <Table>
                <TableToolbar useFlexBetween>
                    <div>
                        <h2 className="font-black text-md">دسته‌بندی‌های سطح 2</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button_6
                            handler={() => {
                                setIsOpenForm(true);
                            }}
                        >
                            + ایجاد دسته‌بندی
                        </Button_6>
                    </div>
                </TableToolbar>
                <TableHead>
                    <TableRow className="">
                        <TableCell>عنوان</TableCell>
                        <TableCell className={"max-md:hidden!"}>لینک</TableCell>
                        <TableCell>برای دسته‌بندی</TableCell>
                        <TableCell className={"max-md:hidden!"}>تعداد فیلتر</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className=" *:h-16! font-medium text-xs!">
                    {SubCategoryData.isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                در حال بارگزاری ...
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubCategoryData.isLoading && SubCategoryData.error && (
                        <TableRow>
                            <TableCell colSpan={3}>
                                <div className="flex-between gap-5">
                                    <p className="text-center text-red-500">{SubCategoryData.error || "خطا در دریافت زیر دسته‌بندی‌ها"}</p>
                                    <VscDebugRestart className="text-green-500 cursor-pointer" onClick={() => fetchSubSubCategories(true)} />
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubCategoryData.isLoading && !SubCategoryData.error && SubCategoryData.subcategories.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                هنوز دسته‌بندی‌ ثبت نشده
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubCategoryData.isLoading &&
                        !SubCategoryData.error &&
                        SubCategoryData.subcategories.map((subcategory) => {
                            return (
                                <TableRow key={subcategory._id}>
                                    <TableCell>{subcategory.title}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{subcategory.slug}</TableCell>
                                    <TableCell>{findLable(subcategory.parent)}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{subcategory.filters?.length}</TableCell>
                                    <TableCell>
                                        <ManageSubCategoryDropdown CategoryData={CategoryData} fetchCategories={fetchCategories} fetchSubSubCategories={fetchSubSubCategories} subcategory={subcategory} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            <CreateSubCategoryModal fetchcategory={fetchCategories} data={CategoryData} isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} onSuccess={onSuccess} />
        </div>
    );
};

export default ModeratorSubCategoriesTable;
