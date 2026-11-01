import React from "react";
import BlogBanner from "../Components/Templates/Blog/Banner";
import Title from "../Components/Templates/Blog/Title";
import Content from "../Components/Templates/Blog/Content";
import RelatedBlogs from "../Components/Templates/Blog/RelatedBlogs";
import Comments from "../Components/Templates/Blog/Comments";
const BlogPage = () => {
  return (
    <main id="blog-page" className="container">
      <div id="content" className="col-span-9">
        <BlogBanner imageSrc="Photos/blog.jpg" alt="بهترین سرخ کن بدون روغن"/>
        <div className="space-y-10">
          <Title text="شیائومی ۱۷ اولترا و پشتیبانی از اتصال ماهواره ای!؟" />
          <Content />
          {/* <RelatedBlogs /> */}
          {/* <Comments /> */}
        </div>
      </div>
      {/* <div id="sidebar" className="col-span-3">
      </div> */}
    </main>
  );
};

export default BlogPage;
