import GEThandler from "@/API/GEThandler";
import { useEffect, useState } from "react";
export const useProducts = (limit = 10) => {
  const [manageProduct, setManageProduct] = useState({products:[],pagination:null,page:'',isLoading:true,error:""});
  const fetchProducts = async (retry=false,page=1) => {
      try {
        if(retry) setManageProduct({...manageProduct,isLoading:true,error:""});
        const {data} = await GEThandler(`products?page=${page}&limit=${limit}`);
        setManageProduct({...manageProduct, products:data.products,pagination:data.pagination,isLoading: false,page});
      } catch (err) {
        setManageProduct({...manageProduct,isLoading:false,error: "خطا در دریافت محصولات"});
      }
  };
  useEffect(() => {
    fetchProducts();
  },[]);
  return {
    products: manageProduct.products,
    pagination: manageProduct.pagination,
    page: manageProduct.page,
    setPage: (newPage) => fetchProducts(true,newPage),
    isLoading: manageProduct.isLoading,
    error: manageProduct.error,
    refetch: ()=>fetchProducts(true),
  };
};