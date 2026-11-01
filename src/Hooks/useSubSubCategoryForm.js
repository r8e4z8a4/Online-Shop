import { useState } from "react";
import POSThandler from "@/API/POSThandler";
import ManageRequest from "@/API/ManageRequest";
import PUThandler from "@/API/PUThandler";
export const useSubSubCategoryForm = (onSuccess,subcategory) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = ({ title, slug, description, filters,parentID }) => {
    setIsSubmitting(true)
    const successHandler=()=>{
      onSuccess();
      setIsSubmitting(false)
    }
    const SubSubCategoryData={title,slug,description,filters,parent:parentID}
    const promise=subcategory?PUThandler(`category/sub/${subcategory._id}`,SubSubCategoryData ,{withCredentials:true}):POSThandler("category/sub",SubSubCategoryData,{withCredentials:true})
    ManageRequest({promise,TextLoader:`درحال ${subcategory?'ویرایش':'ایجاد'} دسته بندی ....`,successHandler,TextSuccess:`دسته بندی با موفقیت ${subcategory?'ویرایش':'ایجاد'} شد.`,errorHandler:()=>setIsSubmitting(false),TextError:`خطا در ${subcategory?'ویرایش':'ایجاد'} دسته بندی`})
  };
  return { isSubmitting, submit };
};
