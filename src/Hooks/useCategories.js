import { useState } from "react";
import GEThandler from "@/API/GEThandler";
const useCategories = () => {
  const [data,setData]=useState({categories:[],isLoading:true,error:''})
  const fetchData = async (retry=false) => {
    if ((data.categories.length!=0||data.error)&&!retry) return
    if (retry)setData({...data,isLoading:true,error:''}) 
    try {
      const res = await GEThandler('category');
      setData({categories:res?.data?.categories || [],isLoading:false,error:''});
    } catch (err) {
      setData({...data,isLoading:false,error:"خطا در دریافت دسته‌بندی‌ها"})
    }
  };
  return { data ,fetchData};
};
export default useCategories;