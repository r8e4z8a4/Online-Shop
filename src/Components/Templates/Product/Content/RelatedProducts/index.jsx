import React from "react";
import Slider from "./Slider";
import ProductCard from "@/Components/Common/Cards/ProductCard";
const RelatedProducts = () => {
  return (
    <div className="space-y-5 dark:border-dark-border dark:bg-dark-bg2">
      <h4 className="text-lg text-slate-700 dark:text-slate-400 font-black">محصولات مرتبط</h4>
      {/* <Slider loop breakpoints={{800: {slidesPerView: 2},1200: {slidesPerView: 3}}} Content={ProductCard} data={Array.from({ length: 10 })}/> */}
    </div>
  );
};
export default RelatedProducts;