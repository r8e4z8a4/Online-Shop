import { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import Table from "@/Components/Templates/Dashboard/common/Table";
import TableToolbar from "@/Components/Templates/Dashboard/common/Table/elements/TableToolbar";
import TableHead from "@/Components/Templates/Dashboard/common/Table/elements/TableHead";
import TableRow from "@/Components/Templates/Dashboard/common/Table/elements/TableRow";
import TableCell from "@/Components/Templates/Dashboard/common/Table/elements/TableCell";
import TableBody from "@/Components/Templates/Dashboard/common/Table/elements/TableBody";
import Button_6 from "@/Components/Common/Buttons/Button_6";
import ManageCategoryDropdown from "@/Components/Templates/Dashboard/templates/moderator/categories/ManageCategoryDropdown";
import { VscDebugRestart } from "react-icons/vsc";
const ModeratorCategoriesTable = ({CategoryData, fetchCategories,fetchSubSubCategories}) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const onSuccess=()=>{
        fetchCategories(true)        
        fetchSubSubCategories(true)            
    }
    return (
        <div className=" my-10">
            <Table>
                <TableToolbar useFlexBetween>
                    <div>
                        <h2 className="font-black text-md">دسته‌بندی‌های سطح 1</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button_6 handler={() => setIsOpenForm(true)}>+ ایجاد دسته‌بندی</Button_6>
                    </div>
                </TableToolbar>
                <TableHead>
                    <TableRow className="">
                        <TableCell>عنوان</TableCell>
                        <TableCell className={"max-md:hidden!"}>لینک</TableCell>
                        <TableCell>تعداد فیلتر</TableCell>
                        <TableCell className={"max-md:hidden!"}>تعداد زیردسته‌بندی</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className=" *:h-16! font-medium text-xs!">
                    {CategoryData.isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                در حال بارگزاری ...
                            </TableCell>
                        </TableRow>
                    )}
                    {!CategoryData.isLoading && CategoryData.error && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-red-500">
                                <div className="flex-between gap-5">
                                    <p className="text-center text-red-500">{CategoryData.error || "خطا در دریافت دسته‌بندی‌ها"}</p>
                                    <VscDebugRestart className="text-green-500 cursor-pointer" onClick={() => fetchCategories(true)} />
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                    {!CategoryData.isLoading && !CategoryData.error && CategoryData.categories.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center ">
                                هنوز دسته‌بندی‌ای ثبت نشده
                            </TableCell>
                        </TableRow>
                    )}
                    {!CategoryData.isLoading &&
                        !CategoryData.error &&
                        CategoryData.categories.map((category) => {
                            return (
                                <TableRow key={category._id}>
                                    <TableCell>{category.title}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{category.slug}</TableCell>
                                    <TableCell>{category.filters?.length}</TableCell>
                                    <TableCell className={"max-md:hidden!"}>{category.subCategories?.length}</TableCell>
                                    <TableCell>
                                        <ManageCategoryDropdown fetchSubSubCategories={fetchSubSubCategories} fetchCategories={fetchCategories} category={category} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            <CreateCategoryModal CategoryData={CategoryData} isOpen={isOpenForm} onClose={() => setIsOpenForm(false)} onSuccess={onSuccess} />
        </div>
    );
};
export default ModeratorCategoriesTable;
