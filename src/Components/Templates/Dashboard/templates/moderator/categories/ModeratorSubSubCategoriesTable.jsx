import { useState } from "react";
import Table from "@/Components/Templates/Dashboard/common/Table";
import TableToolbar from "@/Components/Templates/Dashboard/common/Table/elements/TableToolbar";
import TableHead from "@/Components/Templates/Dashboard/common/Table/elements/TableHead";
import TableRow from "@/Components/Templates/Dashboard/common/Table/elements/TableRow";
import TableCell from "@/Components/Templates/Dashboard/common/Table/elements/TableCell";
import TableBody from "@/Components/Templates/Dashboard/common/Table/elements/TableBody";
import Button_6 from "@/Components/Common/Buttons/Button_6";
import ManageSubSubCategoryDropdown from "@/Components/Templates/Dashboard/templates/moderator/categories/ManageSubSubCategoryDropdown";
import CreateSubSubCategoryModal from "@/Components/Templates/Dashboard/templates/moderator/categories/CreateSubSubCategoryModal";
import { VscDebugRestart } from "react-icons/vsc";
const ModeratorSubSubCategoriesTable = ({SubCategories,SubSubCategoryData,CategoryData, fetchSubSubCategories, fetchCategories}) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const findLable=(parentID)=>{
        const category=SubCategories.find(category=>{
            return category._id==parentID 
        })
        return category?.title||'حذف شده'
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
                        <h2 className="font-black text-md">دسته‌بندی‌های سطح 3</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button_6 handler={() => {setIsOpenForm(true);}}>+ ایجاد دسته‌بندی</Button_6>
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
                    {SubSubCategoryData.isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                در حال بارگزاری ...
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubSubCategoryData.isLoading && SubSubCategoryData.error && (
                        <TableRow>
                            <TableCell colSpan={3} >
                                <div className="flex-between gap-5">
                                    <p className="text-center text-red-500">{SubSubCategoryData.error || "خطا در دریافت دسته‌بندی‌ها"}</p>
                                    <VscDebugRestart className="text-green-500 cursor-pointer" onClick={()=>fetchSubSubCategories(true)}/>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubSubCategoryData.isLoading && !SubSubCategoryData.error && SubSubCategoryData.subcategories.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                هنوز دسته‌بندی‌ ثبت نشده
                            </TableCell>
                        </TableRow>
                    )}
                    {!SubSubCategoryData.isLoading &&
                        !SubSubCategoryData.error &&
                        SubSubCategoryData.subcategories.map((subcategory) => {
                            return (
                                <TableRow key={subcategory._id}>
                                    <TableCell>{subcategory.title}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{subcategory.slug}</TableCell>
                                    <TableCell>{findLable(subcategory.parent)}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{subcategory.filters?.length}</TableCell>
                                    <TableCell>
                                        <ManageSubSubCategoryDropdown CategoryData={CategoryData} fetchCategories={fetchCategories} fetchSubSubCategories={fetchSubSubCategories} subcategory={subcategory} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            <CreateSubSubCategoryModal fetchcategory={fetchCategories} data={CategoryData} isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} onSuccess={onSuccess}/>
        </div>
    );
};
export default ModeratorSubSubCategoriesTable;