import React from "react";

const MiniProduct = ({src,name}) => {
    return (
        <article className="flex items-center gap-4">
            <div className="size-16.5! min-w-16.5! dark:bg-dark-border rounded-lg bg-white">
                <img src={src} alt="Product" className="size-full rounded-md" />
            </div>
            <div>
                <h3 className="text-slate-800 dark:text-slate-400 text-sm! line-clamp-2">
                    <strong>{name}</strong>
                </h3>
            </div>
        </article>
    );
};

export default MiniProduct;
