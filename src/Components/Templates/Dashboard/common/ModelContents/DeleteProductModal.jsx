import React, { useState } from "react";
import ModalFooter from "../Modal/ModalFooter";
import DELETEhandler from "@/API/DELETEhandler";
import ManageRequest from "@/API/ManageRequest";
const DeleteProductModal = ({ onClose ,fetchProducts,product}) => {
    const [isLoading,setisLoading]=useState(false)
    const successHandler=()=>{
        setisLoading(false)
        fetchProducts()
        onClose()
    }
    const deletehandler=()=>{
        setisLoading(true)
        const promise=DELETEhandler(`products/${product._id}`,{withCredentials: true})
        ManageRequest({promise,TextLoader:'درحال حذف محصول ....',successHandler,TextSuccess:'محصول با موفقیت حذف شد.',errorHandler:()=>setisLoading(false),TextError:'خطا در حذف محصول لطفا مجدد امتحان کنید .'})
    }
    return (
        <>
            <div className="space-y-3 py-10">
                <div className="text-center space-y-2">آیا از حذف کردن محصول <span className="text-red-500">{product.name}</span> اطمینان دارید؟</div>
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
export default DeleteProductModal;
