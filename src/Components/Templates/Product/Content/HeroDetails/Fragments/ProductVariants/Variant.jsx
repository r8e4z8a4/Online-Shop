import React from "react";

const Variant = ({variant,value}) => {
  return (
    <div className="bg-slate-200 dark:bg-dark-bg1 p-2 h-18 flex flex-col justify-between rounded-md w-full">
      <p className="text-xs text-slate-500 dark:text-slate-200">{variant} :</p>
      <p className="text-xs font-medium text-slate-700 dark:text-slate-400 line-clamp-2">{value}</p>
    </div>
  );
};

export default Variant;
