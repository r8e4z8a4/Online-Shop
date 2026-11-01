import React from "react";
import Variant from "./Variant";

const ProductVariants = ({customFields}) => {
  return (
    <div className="space-y-3">
      <p className="text-xs font-black text-slate-600 dark:text-slate-400">ویژگی‌ها:</p>

      <div className="grid grid-cols-3 gap-1.5">
        {Object.entries(customFields||{}).map((variant,index) => <Variant variant={variant[0]} value={variant[1]} key={index}/>)}
      </div>
    </div>
  );
};

export default ProductVariants;
