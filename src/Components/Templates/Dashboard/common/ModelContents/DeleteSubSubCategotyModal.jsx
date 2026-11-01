import React, { useState } from "react";
import ModalFooter from "../Modal/ModalFooter";
import DELETEhandler from "@/API/DELETEhandler";
import ManageRequest from "@/API/ManageRequest";
const DeleteSubSubCategoryModal = ({ onClose ,fetchSubSubCategories,subcategory,fetchCategories}) => {
    const [isLoading,setisLoading]=useState(false)
    const successHandler=()=>{
        setisLoading(false)
        fetchSubSubCategories(true)
        fetchCategories(true)
        onClose()
    }
    const deletehandler=()=>{
        setisLoading(true)
        const promise=DELETEhandler(`category/sub/${subcategory._id}`,{withCredentials: true})
        ManageRequest({promise,TextLoader:'درحال حذف دسته بندی ....',successHandler,TextSuccess:' دسته بندی با موفقیت حذف شد.',errorHandler:()=>setisLoading(false),TextError:'خطا در حذف دسته بندی لطفا مجدد امتحان کنید .'})
    }
    return (
        <>
            <div className="space-y-3 py-10">
                <div className="text-center space-y-2">آیا از حذف کردن دسته بندی <span className="text-red-500">{subcategory.title}</span> اطمینان دارید؟</div>
            </div>
            <ModalFooter>
                <button onClick={onClose} className="px-4 py-2 rounded-md bg-red-500/10 text-red-600 duration-150 ‌font-normal hover:bg-red-500/20 ">
                    انصراف
                </button>
                <button disabled={isLoading} onClick={deletehandler} className="px-4 py-2 rounded-md disabled:opacity-45 disabled:cursor-not-allowed bg-red-500 text-white duration-150 ‌font-normal hover:opacity-90">
                    {isLoading?'درحال حذف ....':"تائید"}
                </button>
            </ModalFooter>
        </>
    );
};
export default DeleteSubSubCategoryModal;