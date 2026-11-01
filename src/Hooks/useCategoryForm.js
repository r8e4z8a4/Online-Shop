import { useState } from "react";
import POSThandler from "@/API/POSThandler";
import ManageRequest from "@/API/ManageRequest";
import PUThandler from "@/API/PUThandler";
export const useCategoryForm = (onSuccess,category) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = ({ title, slug, description, iconFile, filters }) => {
    setIsSubmitting(true)
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("filters", JSON.stringify(filters));
    iconFile && formData.append("icon", iconFile);
    const successHandler=()=>{
      onSuccess();
      setIsSubmitting(false)
    }
    const promise=category?PUThandler(`category/${category._id}`, formData,{withCredentials:true}):POSThandler("category", formData,{withCredentials:true})
    ManageRequest({promise,TextLoader:`درحال ${category?'ویرایش':'ایجاد'} دسته بندی ....`,successHandler,TextSuccess:`دسته بندی با موفقیت ${category?'ویرایش':'ایجاد'} شد.`,errorHandler:()=>setIsSubmitting(false),TextError:`خطا در ${category?'ویرایش':'ایجاد'} دسته بندی`})
  };
  return { isSubmitting, submit };
};
