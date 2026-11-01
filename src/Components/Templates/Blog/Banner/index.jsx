import React from "react";
import Author from "./Author";

const BlogBanner = ({ imageSrc, alt }) => {
    return (
        <div className="h-121.25 relative w-full">
            <img className="size-full rounded-xl" src={imageSrc} alt={alt} />
            <div className="absolute size-full bg-linear-to-t from-black/70 to-black/20 top-0 right-0 h-full bottom-0 rounded-xl" />
            <Author name="امین سعیدی" id="@this_peyman" src="Photos/peyman-ahmadi.jpg" />
        </div>
    );
};

export default BlogBanner;
