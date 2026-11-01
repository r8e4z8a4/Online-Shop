import GEThandler from "@/API/GEThandler";
import { useEffect, useState } from "react";
export const useUsers = (limit = 10) => {
  const [manageuser, setManageuser] = useState({users:[],pagination:null,page:'',isLoading:true,error:""});
  const fetchusers = async (retry=false,page=1) => {
      try {
        if(retry) setManageuser({...manageuser,isLoading:true,error:""});
        const {data} = await GEThandler(`users?page=${page}&limit=${limit}`,{ withCredentials: true });
        setManageuser({...manageuser, users:data.users,pagination:data.pagination,isLoading: false,page});
      } catch (err) {
        setManageuser({...manageuser,isLoading:false,error: "خطا در دریافت کاربران"});
      }
  };
  useEffect(() => {
    fetchusers();
  },[]);
  return {
    users: manageuser.users,
    pagination: manageuser.pagination,
    page: manageuser.page,
    setPage: (newPage) => fetchusers(true,newPage),
    isLoading: manageuser.isLoading,
    error: manageuser.error,
    refetch: ()=>fetchusers(true),
  };
};