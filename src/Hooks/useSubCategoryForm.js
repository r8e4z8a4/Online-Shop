import { useState } from "react";
import POSThandler from "@/API/POSThandler";
import ManageRequest from "@/API/ManageRequest";
import PUThandler from "@/API/PUThandler";
export const useSubCategoryForm = (onSuccess,subcategory) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = ({ title, slug, description, filters,parentID }) => {
    setIsSubmitting(true)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("parent", parentID);
    formData.append("filters", JSON.stringify(filters));
    const successHandler=()=>{
      onSuccess();
      setIsSubmitting(false)
    }
    const promise=subcategory?PUThandler(`category/${subcategory._id}`,formData ,{withCredentials:true}):POSThandler("category",formData,{withCredentials:true})
    ManageRequest({promise,TextLoader:`درحال ${subcategory?'ویرایش':'ایجاد'} دسته بندی ....`,successHandler,TextSuccess:`دسته بندی با موفقیت ${subcategory?'ویرایش':'ایجاد'} شد.`,errorHandler:()=>setIsSubmitting(false),TextError:`خطا در ${subcategory?'ویرایش':'ایجاد'} دسته بندی`})
  };
  return { isSubmitting, submit };
};
